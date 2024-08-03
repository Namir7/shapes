import { PointCoords, ShapeType } from "../types";
type Coords = [PointCoords, PointCoords, PointCoords];
export declare class Triangle {
    shape: ShapeType;
    coords: Coords;
    constructor(coords: Coords);
    private _validateCoords;
}
export {};
