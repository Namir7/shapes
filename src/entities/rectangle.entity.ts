import { PointCoords, ShapeType } from "../types/types";

type LeftBottom = PointCoords;
type RightTop = PointCoords;

type RectangleCoords = [LeftBottom, RightTop];

export class Rectangle {
  public shape = ShapeType.Rectangle;
  public coords: RectangleCoords;

  constructor(coords: RectangleCoords) {
    this._validateCoords(coords);

    this.coords = coords;
  }

  private _validateCoords(coords: RectangleCoords) {
    const xValid = coords[0].x < coords[1].x;
    const yValid = coords[0].y < coords[1].y;

    if (!(xValid && yValid)) {
      throw new Error(`ValidateError: not valid rectangle coords: ${coords}`);
    }
  }
}
