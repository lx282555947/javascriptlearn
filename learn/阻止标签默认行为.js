let aele = document.getElementById('a');
aele.onclick = function (event) {
    //高版本
    event.preventDefault();
    //低版本
    // event.returnValue = false;
    //通用
    // return false;
};