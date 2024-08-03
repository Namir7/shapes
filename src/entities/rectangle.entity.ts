import { PointCoords, ShapeType } from "../types";

/*
  leftBottom
  rigthTop
*/
type Coords = [PointCoords, PointCoords];

export class Rectangle {
  public shape = ShapeType.Rectangle;
  public coords: Coords;

  constructor(coords: Coords) {
    this._validateCoords(coords);

    this.coords = coords;
  }

  private _validateCoords(coords: Coords) {
    const xValid = coords[0].x < coords[1].x;
    const yValid = coords[0].y < coords[1].y;

    if (!(xValid && yValid)) {
      throw new Error(`ValidateError: not valid rectangle coords: ${coords}`);
    }
  }
}
