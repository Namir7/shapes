import { PointCoords, ShapeType } from "../types";

type Coords = [PointCoords, PointCoords, PointCoords];

export class Triangle {
  public shape = ShapeType.Triangle;
  public coords: Coords;

  constructor(coords: Coords) {
    this._validateCoords(coords);

    this.coords = coords;
  }

  private _validateCoords(coords: Coords) {
    if (coords.length !== 3) {
      throw new Error(`ValidateError: not valid triangle coords: ${coords}`);
    }
  }
}
