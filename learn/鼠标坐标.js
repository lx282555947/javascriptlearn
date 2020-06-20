document.addEventListener('click', function (event) {
    //可视化范围内的X、Y的坐标，相对于可视化窗口
    console.log('-------可视化范围内鼠标的坐标----------');
    console.log(event.clientX);
    console.log(event.clientY);
    console.log('-------页面内鼠标坐标----------');
    //页面内的X、Y的坐标，相对于页面
    console.log(event.pageX);
    console.log(event.pageY);
    console.log('-------屏幕内鼠标的坐标----------');
    //电脑屏幕内的X、Y的坐标，相对于屏幕
    console.log(event.screenX);
    console.log(event.screenY);
});