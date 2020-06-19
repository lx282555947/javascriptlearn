let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
btn1.onclick = function () {
    alert("111");
};

btn2.addEventListener('click', function () {
    alert("111");
});
btn2.addEventListener('click', function () {
    alert("222");
});
btn2.addEventListener('click', function () {
    alert("333");
});

