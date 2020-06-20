let ul = document.querySelector('#ul');
ul.onclick = function (event) {
    //消除其他li标签的颜色
    let childrens = this.children;
    for (let i = 0; i < childrens.length; i++) {
        let child = childrens[i];
        child.style.backgroundColor = '';
    }
    event.target.style.backgroundColor = 'pink';
};