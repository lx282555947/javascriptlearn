window.addEventListener('load', function () {
    let back = document.querySelector('#back');
    let forward = document.querySelector('#forward');
    let go = document.querySelector('#go');
    back.addEventListener('click', function () {
        history.back();
    });
    forward.addEventListener('click', function () {
        history.forward();

    });
    go.addEventListener('click', function () {
        history.go(2);
    });

});