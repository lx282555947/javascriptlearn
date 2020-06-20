let father = document.querySelector('#father');
let son = document.querySelector('#son');
son.onclick = function (event) {
    alert('son');
    //高版本
    event.stopPropagation();
    // 低版本
    // event.cancelBubble = true;
};

father.onclick = function () {
    alert('father');
};

