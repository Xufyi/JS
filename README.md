
一些有趣的轮播图

3D轮播图  
=======
在线预览：  
https://xufyi.github.io/JS/3D_banner/

效果图：  
<div align=center>
   <img src="https://github.com/Xufyi/JS/blob/master/3D_banner/3dBanner.gif" width="617" height="444">  
  
</div>

原理：  
用css3写出立体效果 + 碎片轮播图   
  
    
    
异性轮播图  
=============
在线预览：  
--
https://xufyi.github.io/JS/Heterosexual_Rolling_banner/

效果图：  
<div align=center>
   <img src="https://github.com/Xufyi/JS/blob/master/Heterosexual_Rolling_banner/rollingBanner.gif" width="785" height="218">  
</div>

原理：  
用jquery给每个li轮流更换类名和样式  
  
    
    
星星连线
========  
在线预览：  
---------
https://xufyi.github.io/banner/Heterosexual_Rolling_banner/

效果展示:  
-----
<div align=center>
   <img src="https://github.com/Xufyi/JS/blob/master/%E6%98%9F%E6%98%9F%E8%BF%9E%E7%BA%BF/start.gif" width="917">  
</div>  


原理：  使用了原生js + canvas，面向对象思想来实现。
-----
1.先创建一个屏幕大小的画布，一个跟随鼠标移动的星星。

2.创建100个星星。星星速度随机，值再 1-3 的 -1或1 次方之间。

3.每20ms画布清空，
  判断星星是否到达屏幕边缘，如果是转向。
  判断每个星星和后面的星星之间距离，绝对值 < 50 px ,连线
  判断跟随鼠标移动的星星和其他星星的距离，绝对值 < 50 px ,连线

4.鼠标点击事件，增加5个星星，减少原来画布中的5个星星，保证星星数量再100个。

    
时钟
========  
效果展示:  
-----
<div align=center>
   <img src="https://github.com/Xufyi/JS/blob/master/%E6%97%B6%E9%92%9F/%E6%97%B6%E9%92%9F.png" width="400" height="400">  
</div>  


原理：  使用了原生js + canvas来实现




