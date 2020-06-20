document.addEventListener('keyup', function (e) {
    alert('键盘按起来了，支持全键');
    console.log('keyup:' + e.key);
});
document.addEventListener('keydown', function (e) {
    alert('键盘按下去了，支持全键，但是不区分大小写');
    console.log('keydown:' + e.keyCode);
});

document.addEventListener('keypress', function (e) {
    alert('键盘按下去了，不支持功能键，但是支持大小写');
    console.log('keypress:' + e.keyCode);
});
