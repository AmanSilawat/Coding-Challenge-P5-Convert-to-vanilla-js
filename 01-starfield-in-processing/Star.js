class Star {
    constructor(canvas) {
        this.x = this.random(-canvas.width, canvas.width);
        this.y = this.random(-canvas.height, canvas.height);
        this.z = this.random(0, canvas.width);
        this.pz = this.z;
    }

    update(canvas) {
        this.z = this.z - canvas.speed;
        if (this.z < 1) {
            this.z = canvas.width;
            this.x = this.random(-canvas.width, canvas.width);
            this.y = this.random(-canvas.height, canvas.height);
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

        canvas.ctx.ellipse(sx + (canvas.width / 2), sy + (canvas.height / 2), r/2, r/2, 0, Math.PI * .99, Math.PI, true);
        canvas.ctx.fill();

        // let px = this.map(this.x / this.pz, 0, 1, 0, this.width);
        // let py = this.map(this.y / this.pz, 0, 1, 0, this.height);

        this.pz = this.z;
    }

    random(start, end) {
        const diff = end - start + 1;
        return Math.floor( (Math.random() * diff) + start)
    }

    map(currVal, startA, endA, startB, endB) {
        return (currVal - startA) / (endA - startA) * (endB - startB) + startB;
    }
}