//获取图片
let img = document.querySelector('img');
document.addEventListener('mousemove', function (event) {
    console.log('鼠标X的坐标是：' + event.pageX + '鼠标Y的坐标是：' + event.pageY);
    img.style.top = event.pageY - 90 + 'px';
    img.style.left = event.pageX - 90 + 'px';
});