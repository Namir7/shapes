import { Cricle } from "../entities/cricle.entity";
import { Point } from "../entities/point.entity";
import { PointService } from "./point.service";

interface OperateCircle {
  isPointInside(p: Point, c: Cricle): boolean;
}

export class CircleService implements OperateCircle {
  private pointService = new PointService();

  isPointInside(point: Point, circle: Cricle) {
    const center = new Point(circle.center);

    const distance = this.pointService.distance(point, center);

    return circle.radius > distance;
  }
}
