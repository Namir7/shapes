import { PointCoords, ShapeType } from "../types/types";

export class Polygon {
  public shape = ShapeType.Polygon;
  public coords: PointCoords[];

  constructor(coords: PointCoords[]) {
    this._validateCoords(coords);

    this.coords = coords;
  }

  private _validateCoords(coords: PointCoords[]) {
    if (coords.length < 4) {
      throw new Error(`ValidateError: not valid polygon coords: ${coords}`);
    }

    const first = coords[0];
    const last = coords[coords.length - 1];

    const isClosed = first.x === last.x && first.y === last.y;

    if (!isClosed) {
      throw new Error(
        `ValidateError: not valid polygon coords: ${coords}, NotClosed`
      );
    }
  }
}
