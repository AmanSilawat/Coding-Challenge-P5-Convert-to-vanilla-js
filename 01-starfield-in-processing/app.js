let stars = [];
let speed;
let starLength = 1;
let canvas = document.createElement('canvas');
let canvasConfig = { canvas: canvas, width: 600, height: 400 };

function setup({ canvas, width, height }) {
    let ctx = canvas.getContext('2d');
    canvas.width = width;
    canvas.height = height;
    for (let i = 0; i < starLength; i++) {
        stars.push(new Star(canvas));
    }
    return {ctx, width, height};
}

function draw(canvas) {
    canvas.speed = 1;
    canvas.ctx.fillStyle = 'rgb(0, 0, 0)';
    canvas.ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (const star of stars) {
        star.update(canvas);
        star.show(canvas);
    }
}


const canvasAndCtx = setup(canvasConfig);
draw(canvasAndCtx);

document.body.appendChild(canvas);
