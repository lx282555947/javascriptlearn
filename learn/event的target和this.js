let olele = document.getElementById("ol");
//this是哪个标签绑定了时间就是哪个   target是点击哪个标签触发了时间就是哪个
//此例子中，如果点击li标签触发了事件，那么this代表的是ol，target代表的是li
olele.onclick = function (event) {
    console.log(event.target);
    console.log(this);
};