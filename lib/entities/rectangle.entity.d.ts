import { PointCoords, ShapeType } from "../types";
type Coords = [PointCoords, PointCoords];
export declare class Rectangle {
    shape: ShapeType;
    coords: Coords;
    constructor(coords: Coords);
    private _validateCoords;
}
export {};
