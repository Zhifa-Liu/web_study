let i = 0;

function timedCount()
{
    i=i+1;
    postMessage(i);//向 HTML 页面传回一段消息
    setTimeout("timedCount()",1000);
}

timedCount();

//web worker 通常不用于如此简单的脚本，而是用于更耗费 CPU 资源的任务