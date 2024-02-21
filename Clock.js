setInterval(showTime,1000)
function showTime()
{
    const date = new Date();
let hours = (date.getHours());
let min = date.getMinutes();
let sec = date.getSeconds();
let am_pm = "am";
if(hours > 12)
{
    am_pm = "PM";
}
else if(hours < 12)
{
    am_pm = "AM";
}
    hours = hours < 10 ? "0" + hours : hours;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
console.log(hours);
document.getElementById("a1").innerHTML = hours;
document.getElementById("a2").innerHTML = min;
document.getElementById("a3").innerHTML = sec;
document.getElementById("a4").innerHTML = am_pm;
}

showTime();