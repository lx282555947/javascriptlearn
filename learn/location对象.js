// localtion对象是地址栏对象，包括地址栏的url的各个信息
//location有几个属性  href 是地址url   host是ip加端口   port是端口  pathname 是返回路径  search 是参数  hash是锚点
window.addEventListener('load', function () {
    let assignButton = document.querySelector('#assign');
    let replaceElement = document.querySelector('#replace');
    assignButton.addEventListener('click', function (e) {
        //重定向会记录浏览历史，可回退
        location.assign('http://www.baidu.com');
    });
    replaceElement.addEventListener('click', function () {
        //取代不会记录浏览历史，不可回退
        location.replace('http://www.baidu.com');

    });
    let refreshElement = document.querySelector('#refresh');
    refreshElement.addEventListener('click', function () {
        location.reload();
    });
});