import { PointCoords, ShapeType } from "../types";

export class Cricle {
  public shape = ShapeType.Circle;
  public center: PointCoords;
  public radius: number;

  constructor(center: PointCoords, radius: number) {
    this.center = center;
    this.radius = radius;
  }
}
