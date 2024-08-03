import { PointCoords, ShapeType } from "../types/types";
type LeftBottom = PointCoords;
type RightTop = PointCoords;
type RectangleCoords = [LeftBottom, RightTop];
export declare class Rectangle {
    shape: ShapeType;
    coords: RectangleCoords;
    constructor(coords: RectangleCoords);
    private _validateCoords;
}
export {};
