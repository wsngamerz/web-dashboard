window.onload = function() { startClock();} // run clock on load

function startClock() {
    var t=new Date();
    var h=t.getHours();
    var m=t.getMinutes();
    var s=t.getSeconds();
    m=check(m);
    s=check(s);
    document.getElementById('clock').innerHTML=h+":"+m+":"+s;
    setTimeout(function(){startClock()},250);
}

function check(i) {
    if(i<10){i="0"+i};  //  zero front of num < 10 to make look better
    return i;
}
