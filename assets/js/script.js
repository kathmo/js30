function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.code}"]`);
    const key = document.querySelector(`.key[data-key="${e.code}"]`);
    if (!audio) return;
    audio.currentTime = 0; // resets audio to the beginning
    audio.play();
    key.classList.add("playing");

    if (key.classList.contains("hi-hat")) {
        key.classList.add("playing-hi-hat");
    }

    if (key.classList.contains("snare")) {
        key.classList.add("playing-snare");
    }

    if (key.classList.contains("kick")) {
        key.classList.add("playing-kick");
    }

    if (key.classList.contains("ride")) {
        key.classList.add("playing-ride");
    }

    if (key.classList.contains("accessory")) {
        key.classList.add("playing-accessory");
    }

    if (key.classList.contains("clap")) {
        key.classList.add("playing-clap");
    }
}

function removeEffect(e) {
    const key = document.querySelector(`.key[data-key="${e.code}"]`);
    key.classList.remove("playing");
    key.classList.remove("playing-hi-hat");
    key.classList.remove("playing-snare");
    key.classList.remove("playing-kick");
    key.classList.remove("playing-ride");
    key.classList.remove("playing-accessory");
    key.classList.remove("playing-clap");
}

window.addEventListener("keydown", playSound);
window.addEventListener("keyup", removeEffect);
