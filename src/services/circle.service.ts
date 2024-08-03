import { Cricle } from "../entities/cricle.entity";
import { PointCoords } from "../types/types";
import { PointService } from "./point.service";

interface OperateCircle {
  isPointInside(p: PointCoords, c: Cricle): boolean;
}

export class CircleService implements OperateCircle {
  private pointService = new PointService();

  isPointInside(point: PointCoords, circle: Cricle) {
    const distance = this.pointService.distance(point, circle.center);

    return circle.radius > distance;
  }
}
