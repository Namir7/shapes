import { Triangle } from "../entities/triangle.entity";
import { PointCoords } from "../types/types";
interface OperateTriangle {
    area(t: Triangle): number;
    isPointInside(p: PointCoords, t: Triangle): boolean;
}
export declare class TriangleService implements OperateTriangle {
    area(t: Triangle): number;
    isPointInside(point: PointCoords, triangle: Triangle): boolean;
}
export {};
