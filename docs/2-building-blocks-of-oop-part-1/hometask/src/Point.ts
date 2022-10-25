export class Point {
    public x: number;
    public y: number;

    constructor();
    constructor (x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
    
    toString() {
        return `(${this.x}, ${this.y})`;
    }

    public distance();
    public distance(other?: Point);
    public distance(x?, y?) {
        let fromX = 0;
        let fromY = 0;
        if (x instanceof Point) {
            fromX = x.x;
            fromY = x.y;
        }
        if (typeof x === 'number' && typeof y === 'number') {
            fromX = x;
            fromY = y;
        }

        return Math.sqrt(Math.pow(fromX - this.x, 2) + Math.pow(fromY - this.y, 2));
    }
}
