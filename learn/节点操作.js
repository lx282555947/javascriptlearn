let olElement = document.querySelector("ol");
let olChildNodes = olElement.childNodes;
//获取所有子节点
for (let i = 0; i < olChildNodes.length; i++) {
    console.log('子节点类型：' + olChildNodes[i].nodeType);
}
//获取所有子元素
let childrenlist = olElement.children;
for (let i = 0; i < childrenlist.length; i++) {
    console.log('子元素类型：' + childrenlist[i].nodeType);
}
let firstChild = olElement.firstChild;
console.log('firstChild类型为:' + firstChild.nodeType);
let firstElementChild = olElement.firstElementChild;
console.log('firstElementChild类型为:' + firstElementChild.nodeType);
console.log('--------------------------------');
//下一个兄弟节点
let nextSibling = firstChild.nextSibling;
console.log(nextSibling);
//下一个兄弟元素节点
let nextElementSibling = firstChild.nextElementSibling;
console.log(nextElementSibling);
console.log('---------------------------------');
//前一个兄弟节点
let previousSibling = olElement.previousSibling;
console.log(previousSibling);
//前一个元素兄弟节点
let previousElementSibling = olElement.previousElementSibling;
console.log(previousElementSibling);

//创建节点
let createLiElement = document.createElement("li");
createLiElement.innerText = '我是新创建出来的li标签';
//添加到某节点下
olElement.appendChild(createLiElement);

//插入节点
let createLi2 = document.createElement("li");
createLi2.innerText = '我是来插队的li标签';
olElement.insertBefore(createLi2, olElement.children[0]);

//删除节点
olElement.removeChild(olElement.children[1])
