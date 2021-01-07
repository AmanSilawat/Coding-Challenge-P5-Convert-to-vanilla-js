class Star {
    constructor(canvas) {
        this.x = this.random(0, canvas.width);
        this.y = this.random(0, canvas.height);
        this.z = this.random(0, canvas.width)
        this.pz = this.z;
    }

    update(canvas) {
        this.z = this.z - speed;
        this.x = this.random(0, canvas.width);
        this.y = this.random(0, canvas.height);
        this.z = canvas.width;
        this.pz = this.z;
    }

    show(canvas) {
        console.log(this)
        canvas.ctx.fillStyle = 'rgb(255, 255, 255)';
        // Draw the ellipse
        canvas.ctx.beginPath();

        // canvas.ctx.ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle[, anticlockwise]);
        canvas.ctx.ellipse(this.x, this.y, 50, 50, 0, Math.PI * .99, Math.PI, true);
        canvas.ctx.fill();

        // let r = this.map(this.z, 0, canvas.width, 16, 0);
        let r = this.map(5, 1, 100, 1, 10);
    }

    random(start, end) {
        const diff = end - start + 1;
        return Math.floor( (Math.random() * diff) + start)
    }

    map(currVal, startCurr1, stopCurr2, startTarget1, startTarget2) {
        
        console.log(currVal, startCurr1, stopCurr2, startTarget1, startTarget2)
    }
}