let stars = [];
let speed;
let starLength = 10000;
let canvas = document.createElement('canvas');
let canvasConfig = { canvas: canvas, width: 600, height: 400 };

function setup({ canvas, width, height }) {
    let ctx = canvas.getContext('2d');
    canvas.width = width;
    canvas.height = height;
    for (let i = 0; i < starLength; i++) {
        stars.push(new Star(canvas));
    }
    return { ctx, width, height };
}

function draw() {
    canvasAndCtx.speed = 2;
    canvasAndCtx.ctx.fillStyle = 'rgb(0, 0, 0)';
    canvasAndCtx.ctx.fillRect(0, 0, canvasAndCtx.width, canvasAndCtx.height);
    for (const star of stars) {
        star.update(canvasAndCtx);
        star.show(canvasAndCtx);
    }
    window.webkitRequestAnimationFrame(draw)
}



const canvasAndCtx = setup(canvasConfig);
draw(canvasAndCtx);

document.body.appendChild(canvas);
