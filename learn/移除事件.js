let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
btn3.onclick=function () {
    alert(333);
    this.onclick = null;
}
function fn1() {
    alert(444);
}
function fn2() {
    alert(555);
    this.removeEventListener('click', fn2);
}
btn4.addEventListener('click', fn1);
btn4.addEventListener('click', fn2);