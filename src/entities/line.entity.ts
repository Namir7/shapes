import { PointCoords, ShapeType } from "../types";

export class Line {
  public shape = ShapeType.Line;
  public coords: [PointCoords, PointCoords];

  constructor(coords: [PointCoords, PointCoords]) {
    this._validateCoords(coords);

    this.coords = coords;
  }

  private _validateCoords(coords: [PointCoords, PointCoords]) {
    if (coords.length < 2) {
      throw new Error(`ValidateError: not valid line coords: ${coords}`);
    }
  }
}
