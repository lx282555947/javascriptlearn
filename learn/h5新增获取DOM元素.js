let boxClassList = document.getElementsByClassName("box");
for (let i = 0; i < boxClassList.length; i++) {
    console.log(boxClassList[i]);
}
let box = document.querySelector(".box");
console.log('第一个' + box);
let bosx = document.querySelectorAll(".box");
for (let i = 0; i < bosx.length; i++) {
    console.log(bosx[i]);
}
let lis = document.querySelectorAll("li");
for (let i = 0; i < lis.length; i++) {
    console.log(lis[i]);
}