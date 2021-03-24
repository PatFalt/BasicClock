function tickingClock() {
    let date= new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    hours = addZero(hours);
    minutes = addZero(minutes);
    seconds = addZero(seconds);
    document.getElementById('clock').innerHTML = hours + ':' + minutes + ':' + seconds;
    document.getElementById('date').innerHTML = date.getDate() + '.' + date.getMonth() + '.' + date.getFullYear();
    var t = setTimeout(tickingClock, 1000);
};

function addZero(i) {
    if(i < 10) {
        return '0' + i
    } else {
        return i
    }
};

tickingClock();