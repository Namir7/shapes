import { PointCoords, ShapeType } from "../types";

export class Point {
  public shape = ShapeType.Point;
  public coords: PointCoords;

  constructor(coords: PointCoords) {
    this._validateCoords(coords);

    this.coords = coords;
  }

  private _validateCoords(coords: PointCoords) {
    const isObject = typeof coords === "object";
    const isNumber =
      typeof coords.x === "number" && typeof coords.y === "number";

    if (!isObject || !isNumber) {
      throw new Error(`ValidateError: not valid point coords: ${coords}`);
    }
  }
}
