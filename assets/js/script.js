function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.code}"]`);
    const key = document.querySelector(`.key[data-key="${e.code}"]`);
    if (!audio) return;
    audio.currentTime = 0; // resets audio to the beginning
    audio.play();
    key.classList.add('playing');
}

window.addEventListener('keydown', playSound);
