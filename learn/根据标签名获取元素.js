let liList = document.getElementsByTagName("li");
for (let i = 0; i < liList.length; i++) {
    let info = liList[i].innerHTML;
    console.log(info);
}
let ollist = document.getElementsByTagName("ol");
let olLiList = ollist[0].getElementsByTagName("li");
for (let i = 0; i < olLiList.length; i++) {
    console.log(olLiList[i]);
}

let body = document.getElementsByTagName("body");
let allLiList = body[0].getElementsByTagName("li");
for (let i = 0; i < allLiList.length; i++) {
    console.log('body下的li标签：' + allLiList[i]);      
}

