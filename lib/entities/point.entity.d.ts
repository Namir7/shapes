import { PointCoords, ShapeType } from "../types";
export declare class Point {
    shape: ShapeType;
    coords: PointCoords;
    constructor(coords: PointCoords);
    private _validateCoords;
}
