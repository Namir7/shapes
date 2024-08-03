import { Point } from "../entities/point.entity";

interface OperatePoint {
  distance(p1: Point, p2: Point): number;
}

export class PointService implements OperatePoint {
  distance(p1: Point, p2: Point) {
    const x = p1.coords.x - p2.coords.x;
    const y = p1.coords.y - p2.coords.y;

    return Math.sqrt(x ** 2 + y ** 2);
  }
}
