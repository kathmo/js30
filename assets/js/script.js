const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

// make the canvas as large as the window
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = 'blue';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 10;

let isDrawing = false;
let lastX = 0;
let lastY = 0;

function draw(e) {
    if (!isDrawing) return;  // stop drawing if mouse is not clicked down
    console.log(e);
}

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', () => isDrawing = true);

canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);
