function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.code}"]`);
    const key = document.querySelector(`.key[data-key="${e.code}"]`);
    if (!audio) return;
    audio.currentTime = 0; // resets audio to the beginning
    audio.play();

    if (key.classList.contains("hi-hat")) {
        key.classList.add("playing-hi-hat");
    } else if (key.classList.contains("snare")) {
        key.classList.add("playing-snare");
    } else if (key.classList.contains("kick")) {
        key.classList.add("playing-kick");
    } else if (key.classList.contains("ride")) {
        key.classList.add("playing-ride");
    } else if (key.classList.contains("accessory")) {
        key.classList.add("playing-accessory");
    } else if (key.classList.contains("clap")) {
        key.classList.add("playing-clap");
    } else {
        key.classList.add("playing-default");
    }

    key.classList.add("playing");
}

function removeEffect(e) {
    const key = document.querySelector(`.key[data-key="${e.code}"]`);
    key.classList.remove(key.classList.item(2), key.classList.item(3));
}

window.addEventListener("keydown", playSound);
window.addEventListener("keyup", removeEffect);
