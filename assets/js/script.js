const secHand = document.querySelector('.sec-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
    const now = new Date();
    const secs = now.getSeconds();
    const secsDegrees = (secs / 60) * 360 + 90;
    secHand.style.transform = `rotate(${secsDegrees}deg)`;
    /*
    // to check that the position of the second hand matches the actual seconds
    console.log(secs);
    */

    const mins = now.getMinutes();
    const minsDegrees = (mins / 60) * 360 + 90;
    minHand.style.transform = `rotate(${minsDegrees}deg)`;

    const hours = now.getHours();
    const hoursDegrees = (hours / 12) * 360 + 90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

// set the date every 1000 milliseconds (1 second)
setInterval(setDate, 1000);
