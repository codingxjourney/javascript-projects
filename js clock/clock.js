console.log('this is clock.js')

function updateClock(){
    // get the current date
    let currentTime = new Date();

    // extract hour, min and seconds from the date
    let currentHour = currentTime.getHours();
    let currentMinute = currentTime.getMinutes();
    let currentSecond = currentTime.getSeconds();

    // pad 0 if minute or second is less than 10 (single digit)
    currentHour = (currentHour < 10 ? "0" : "") + currentHour;
    currentMinute = (currentMinute < 10 ? "0": "") + currentMinute;
    currentSecond = (currentSecond < 10 ? "0" : "") + currentSecond;

    // convert railway clock to AM/PM clock
    currentHour = (currentHour > 12) ? currentHour - 12 : currentHour;
    currentHour = (currentHour == 0) ? 12 : currentHour;

    // choose AM/PM as per the time of the day
    let timeOfDay = (currentHour < 12) ? "AM" : "PM";

    // prepare the time string from hours, minutes and seconds
    let currentTimeStr = currentHour + ":" + currentMinute + ":" + currentSecond + " " + timeOfDay;

    // Insert the time string inside the DOM
    document.getElementById('clock').innerHTML = currentTimeStr;
} 