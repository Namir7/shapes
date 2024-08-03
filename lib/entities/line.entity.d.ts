import { PointCoords, ShapeType } from "../types";
export declare class Line {
    shape: ShapeType;
    coords: [PointCoords, PointCoords];
    constructor(coords: [PointCoords, PointCoords]);
    private _validateCoords;
}
