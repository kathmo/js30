const secHand = document.querySelector('#sec-hand');
const minHand = document.querySelector('#min-hand');
const hourHand = document.querySelector('#hour-hand');

function setDate() {
    const now = new Date();

    // get time values
    const secs = now.getSeconds();
    const mins = now.getMinutes();
    const hours = now.getHours();

    // convert time values to degrees
    const secsDegrees = (secs / 60) * 360 + 90;
    const minsDegrees = (mins / 60) * 360 + 90;
    const hoursDegrees = (hours / 12) * 360 + 90;

    /*
    set and reset the transition to remove the visual jolt that occurs when clock hands go backwards to their starting position at time zero
    */
    if (secs === 0) {
        secHand.style.transition = `none`;
    } else {
        secHand.style.transition = `all 0.05s`;
    }

    if (mins === 0) {
        minHand.style.transition = `none`;
    } else {
        minHand.style.transition = `all 0.05s`;
    }

    if (hours === 0) {
        minHand.style.transition = `none`;
    } else {
        minHand.style.transition = `all 0.05s`;
    }

    // rotate clock hands
    secHand.style.transform = `rotate(${secsDegrees}deg)`;
    // to check that the position of the second hand matches the actual seconds
    // console.log(secs);
    minHand.style.transform = `rotate(${minsDegrees}deg)`;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

// set the date every 1000 milliseconds (1 second)
setInterval(setDate, 1000);
