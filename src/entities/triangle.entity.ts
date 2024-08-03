import { PointCoords, ShapeType } from "../types/types";

export class Triangle {
  public shape = ShapeType.Triangle;
  public coords: PointCoords[];

  constructor(coords: PointCoords[]) {
    this._validateCoords(coords);

    this.coords = coords;
  }

  private _validateCoords(coords: PointCoords[]) {
    if (coords.length !== 3) {
      throw new Error(`ValidateError: not valid triangle coords: ${coords}`);
    }
  }
}
