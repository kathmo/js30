const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
const colorBtns = document.querySelectorAll('.color');
const sizeBtns = document.querySelectorAll('.size');
const clearBtn = document.querySelector('#clear');

// make the canvas as large as the window
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = 'blue';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 25;

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let color = '';
let hue = 0;

function draw(e) {
    if (!isDrawing) return;  // stop drawing if mouse is not clicked down
    console.log(e);

    if (color != "rainbow") {
        ctx.strokeStyle = color;
    } else {
        ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    }

    ctx.beginPath();
    // start from
    ctx.moveTo(lastX, lastY);
    // go to
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();

    [lastX, lastY] = [e.offsetX, e.offsetY];
    hue++;
}

function setColor(e) {
    color = this.dataset.color;
}

function setLineWidth(e) {
    ctx.lineWidth = this.dataset.size;
}

function clearCanvas(e) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);

// button events
colorBtns.forEach(btn => btn.addEventListener('click', setColor));
sizeBtns.forEach(btn => btn.addEventListener('click', setLineWidth));
clearBtn.addEventListener('click', clearCanvas);
