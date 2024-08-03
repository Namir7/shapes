import { PointCoords, ShapeType } from "../types/types";

export class Line {
  public shape = ShapeType.Line;
  public coords: PointCoords[];

  constructor(coords: PointCoords[]) {
    this._validateCoords(coords);

    this.coords = coords;
  }

  private _validateCoords(coords: PointCoords[]) {
    if (coords.length < 2) {
      throw new Error(`ValidateError: not valid line coords: ${coords}`);
    }
  }
}
