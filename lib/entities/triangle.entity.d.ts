import { PointCoords, ShapeType } from "../types/types";
export declare class Triangle {
    shape: ShapeType;
    coords: PointCoords[];
    constructor(coords: PointCoords[]);
    private _validateCoords;
}
