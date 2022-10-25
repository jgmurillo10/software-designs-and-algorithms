import { Point } from './point';
import { Shape } from './Shape';

export class Triangle extends Shape {
    // public a: Point;
    // public b: Point;
    // public c: Point;
    public color: string;
    public filled: boolean;

    constructor(a: Point, b: Point, c: Point);
    constructor(a: Point, b: Point, c: Point, color: string = 'hola', filled: boolean = true) {
        super([a, b, c]);
        // this.a = a;
        // this.b = b;
        // this.c = c;
        this.color = color;
        this.filled = filled;
    }

    public getType(): string {
        let type = '';
        
        const sideAB = parseFloat(this.points[0].distance(this.points[1])).toFixed(3);
        const sideBC = parseFloat(this.points[1].distance(this.points[2])).toFixed(3);
        const sideCA = parseFloat(this.points[2].distance(this.points[0])).toFixed(3);

        if (sideAB === sideBC && sideBC === sideCA) {
            type = 'equilateral triangle';
        } else if (sideAB !== sideBC && sideBC !== sideCA &&  sideCA !== sideAB) {
            type = 'scalene triangle';
        } else {
            type = 'isosceles triangle'
        }
        return type;
    }

    public toString() {
        const points = this.points.map((point, index) => `v${index+1}=${point.toString()}`).join(',');
        return `Triangle[${points}]`;
    }
}
