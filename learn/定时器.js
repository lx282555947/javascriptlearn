//第一种定时器，setTimeout  延迟X秒之后执行回调函数
window.addEventListener('load', function () {
    let buttonElement = document.querySelector('button');
    let timmer = setTimeout(function () {
        console.log('爆炸了');
    }, 5000);
    buttonElement.addEventListener('click', function () {
        console.log('终止了timeout爆炸');
        clearTimeout(timmer);
    });
});

//第二种定时器，setInterval  每个X秒执行一次回调函数
window.addEventListener('load', function () {
    let buttonElement = document.querySelector('button');
    let timmer = setInterval(function () {
        console.log('再次爆炸');
    }, 1000);

    buttonElement.addEventListener('click', function () {
        console.log('终止了interval爆炸');
        clearInterval(timmer);
    });
});
