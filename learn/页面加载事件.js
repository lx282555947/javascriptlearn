// load事件会在页面所有元素加载完成之后加载
window.addEventListener('load',function (e) {
    alert('所有元素加载完成');
    let button = document.querySelector('button');
    button.addEventListener('click', function () {
        alert('点击了按钮');
    });
})
//DOMCntentLaded事件是在所有DOM元素加载完后加载，不包括图片和css样式
window.addEventListener('DOMContentLoaded', function () {
    alert('DOM加载完成');
});