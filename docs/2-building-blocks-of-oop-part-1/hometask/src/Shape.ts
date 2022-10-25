import { Point } from "./point";

export abstract class Shape {
  protected color: string;
  protected filled: boolean;
  public points: Point[];

  constructor(points: Point[]);
  constructor(points: Point[], color: string = 'green', filled: boolean = true) {
    this.points = points;
    this.color = color;
    this.filled = filled;

    if (points.length < 3) {
      throw Error();
    }
  }

  public toString() {
    const stringPoints = this.points.map(point => point.toString());

    return `A Shape with color of ${this.color} and ${this.filled? '' : 'not '}filled. Points: ${stringPoints.join(', ')}.`;
  }

  public getPerimeter() {
    let perimeter = 0;

    for (let index = 0; index < this.points.length; index++) {
      const currentPoint = this.points[index];
      const nextPoint = this.points[(index + 1)% this.points.length];
      
      perimeter += currentPoint.distance(nextPoint);
    }

    return perimeter;
  }

  abstract getType(): string;
}
