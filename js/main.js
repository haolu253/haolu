const lock = document.createElement('meta');
lock.name = 'darkreader-lock';
document.head.appendChild(lock);

if (navigator.userAgent.match(/samsung/i)) {
    alert("Your browser (Samsung Internet) may not show this website" + 
          "correctly. Please consider using a standards-compliant" + 
          "browser instead. \n\n" +
          "We recommend Firefox, Microsoft Edge, or Google Chrome.");
}

// Retrieve the DOM elements that'll be updated every second
const secondsElement = document.querySelector('.second');
const minutesElement = document.querySelector('.minute');
const hoursElement = document.querySelector('.hour');

function setRotation(element, degrees) {
    // Set the rotation and add 90 to default from 12am
    element.style.transform = `rotate(${degrees+90}deg)`;
}

function updateClockHandsToCurrentTime() {
    // get the current time in UTC+7
    const now = new Date(new Date().toLocaleString("en-US", {timeZone: "Asia/Bangkok"}));

    // break it down to hours, minutes and seconds
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();
    
    // calc the rotation of each clock hand in degrees
    const secondsRotationDegrees = (seconds / 60) * 360;
    const minutesRotationDegrees = (minutes / 60) * 360 + (seconds/60)*6;
    const hoursRotationDegrees = (hours / 12) * 360 + (minutes/60)*30;

    setRotation(secondsElement, secondsRotationDegrees);
    setRotation(minutesElement, minutesRotationDegrees);
    setRotation(hoursElement, hoursRotationDegrees);
}

// Set the initial clock state, and update it every second
setInterval(updateClockHandsToCurrentTime, 1000);
updateClockHandsToCurrentTime();
