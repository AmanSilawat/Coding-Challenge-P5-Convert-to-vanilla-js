class Star {
    constructor(canvas) {
        this.x = this.random(0, canvas.width);
        this.y = this.random(0, canvas.height);
        this.z = this.random(0, canvas.width)
        this.pz = this.z;
    }

    update(canvas) {
        this.z = this.z - canvas.speed;
        if (this.z < 1) {
            this.z = canvas.width;
            this.x = this.random(0, canvas.width);
            this.y = this.random(0, canvas.height);
            this.pz = this.z;
        }
    }

    show(canvas) {
        canvas.ctx.fillStyle = 'rgb(255, 255, 255)';
        // Draw the ellipse
        canvas.ctx.beginPath();

        let sx = this.map(this.x / this.z, 0, 1, 0, canvas.width);
        let sy = this.map(this.y / this.z, 0, 1, 0, canvas.height);
        let r = this.map(this.z, 0, canvas.width, 16, 0);

        canvas.ctx.ellipse(sx, sy, r, r, 0, Math.PI * .99, Math.PI, true);
        canvas.ctx.fill();

        let px = this.map(this.x / this.pz, 0, 1, 0, this.width);
        let py = this.map(this.y / this.pz, 0, 1, 0, this.height);

        this.pz = this.z;
    }

    random(start, end) {
        const diff = end - start + 1;
        return Math.floor( (Math.random() * diff) + start)
    }

    map(currVal, startCurr1, stopCurr2, startTarget1, startTarget2) {
        const currentValDiff = currVal - startCurr1
        const currentDiff = stopCurr2 - startCurr1;
        
        let targetDiff = (startTarget1 >= startTarget2)
            ? startTarget1 - startTarget2
            : startTarget2 - startTarget1;

        let firstPer = (currentValDiff / currentDiff) * 100;
        let result = (firstPer * targetDiff) / 100;
        return targetDiff - result;
    }
}