// get all the inputs
const inputs = document.querySelectorAll('.controls input');

function updateEffects() {
    // get value (suffix) of the object's data attribute, data-units, from dataset
    const suffix = this.dataset.units || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

// update image effects on a change
inputs.forEach(input => input.addEventListener('change', updateEffects));
// update image effects as mouse moves the input
inputs.forEach(input => input.addEventListener('mousemove', updateEffects));
