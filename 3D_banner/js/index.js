// 拿到spt中的所有box中的所有box1和box2
var box = document.getElementById('box')
var divs = getChildNodes(box)

var front = document.querySelectorAll('.front')
var back = document.querySelectorAll('.back')

var pre = document.querySelector('#pre')
var next = document.querySelector('#next')

var carousel = document.querySelector('.carousel')
var lis = carousel.querySelectorAll('li')

var spt = document.querySelector('.spt')

var idx = 0
var idx1 = 0
var lock = true;

//divs的高度定位
divs.forEach(function(value, index) {
	value.style.top = parseInt(index / 2) * 60 + "px";
})

//下一张点击事件
next.onclick = function(){
	//节流
	if(!lock){return}
	lock = false;

	idx = idx1
	//增加back索引
	idx1++

	if(idx1 >= lis.length ){
		idx1 = 0;
	}		
	change()	
}
//上一张点击事件
pre.onclick = function(){
	//节流
	if(!lock){return}
	lock = false;

	idx = idx1
	//减少back索引
	idx1--
	
	if(idx1 < 0 ){
		idx1 = lis.length - 1;
	}
	change()
}

// 获取元素中的元素节点
function getChildNodes(dom){
	// 拿到节点判断 
	var domNodes = box.childNodes;
	var arr = [] 

	for(var i = 0; i <domNodes.length; i++ ){
		if( domNodes[i].nodeType === 1 ){
			arr.push(domNodes[i])
		}
		// 如果为元素节点，添加到数组
	}
	return arr
}

function change(){
	//真图显示，碎片图出现
	carousel.style.display = 'none'
	spt.style.display = 'block'
	//真图lis失去.cur
	for(var i = 0;i<lis.length;i++){
		lis[i].className = ''
	}
	
	//渲染front前的背景
	front.forEach(function(value,index){	
		value.style.backgroundImage = 'url(imgs/'+ idx   +'.jpg)'
		value.style.backgroundPositionX = -parseInt(index % 2)*450 + 'px'
		value.style.backgroundPositionY = -parseInt(index / 2)*60 + 'px'
	})
	//渲染back前的背景
	back.forEach(function(value,index){	
		value.style.backgroundImage = 'url(imgs/'+ idx1  + '.jpg)'
		value.style.backgroundPositionX = -parseInt(index % 2)*450 + 'px'
		value.style.backgroundPositionY = -parseInt(index / 2)*60 + 'px'
	})

	divs.forEach(function(value,index){
		if( index % 2 ){
			//奇数，表示右边的box2
			setTimeout(function(){
				value.style.animation = 'two 1s linear 0s forwards'
			},parseInt(index / 2)* 1000)	
		}else{
			//左边的box1
			setTimeout(function(){
				value.style.animation = 'one 1s linear 0s forwards'
			},parseInt(index / 2)* 1000)
		}
	})		
	setTimeout(function(){				
		//正图出现，单前图片加cur
		carousel.style.display =  'block'
		lis[idx1].className = 'cur'
		//碎片图消失，并且关闭动画
		spt.style.display = 'none'
		divs.forEach(function(value,index){
			value.style.animation = ''
		})
		//开锁
		lock = true
	},1000 * 10 + 1000)
}