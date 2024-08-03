import { PointCoords, ShapeType } from "../types/types";
export declare class Polygon {
    shape: ShapeType;
    coords: PointCoords[];
    constructor(coords: PointCoords[]);
    private _validateCoords;
}
