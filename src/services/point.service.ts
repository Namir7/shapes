import { PointCoords } from "../types/types";

interface OperatePoint {
  distance(p1: PointCoords, p2: PointCoords): number;
}

export class PointService implements OperatePoint {
  distance(p1: PointCoords, p2: PointCoords) {
    return Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2);
  }
}
