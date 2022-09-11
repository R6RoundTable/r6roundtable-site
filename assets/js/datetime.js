"strict mode";
let datetime = document.getElementsByClassName("datetime");
for(let i = 0; i < datetime.length; ++i)
{
    datetime[i].innerText = luxon.DateTime.fromISO(datetime[i].innerText).toLocal().toFormat("ccc, d LLL yyyy, hh:mm a ZZ");
}
let date = document.getElementsByClassName("date");
for(let i = 0; i < date.length; ++i)
{
    date[i].innerText = luxon.DateTime.fromISO(date[i].innerText).toLocal().toFormat("ccc, d LLL yyyy");
}
let time = document.getElementsByClassName("time");
for(let i = 0; i < time.length; ++i)
{
    time[i].innerText = luxon.DateTime.fromISO(time[i].innerText).toLocal().toFormat("hh:mm a ZZ");
}
let localtime = document.getElementsByClassName("local-time");
for(let i = 0; i < localtime.length; ++i)
{
    localtime[i].innerHTML = luxon.DateTime.fromISO(localtime[i].innerText).toLocal().toFormat("hh:mm a '<small>your local time, UTC'ZZ'</small>'");
}
