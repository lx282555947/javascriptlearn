let divenvent = document.querySelector("#div");
divenvent.onclick = function () {
    console.log("我被选中了");
}
let inputElement = document.getElementById("input");
inputElement.onfocus = function () {
    if (this.value === '手机') {
        this.value = '';
    }
    this.style.color = '#000000';
}

inputElement.onblur = function () {
    if (this.value === '') {
        this.value = '手机';
    }
    this.style.color='#272727';
}