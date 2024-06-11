document.onkeydown = function (event) {
    event = event || window.event; // 确保 event 对象存在
    if (123 === event.keyCode || 
        (event.ctrlKey && event.shiftKey && (74 === event.keyCode || 73 === event.keyCode || 67 === event.keyCode)) || 
        (event.ctrlKey && 85 === event.keyCode)) {
        btf.snackbarShow("你真坏，不能打开控制台喔!"); // 显示消息
        event.preventDefault(); // 阻止默认行为
        event.stopPropagation(); // 阻止事件传播
        return false; // 返回 false 以阻止事件
    }
};