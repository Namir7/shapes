import { Point } from "../entities/point.entity";
import { Triangle } from "../entities/triangle.entity";
interface OperateTriangle {
    area(t: Triangle): number;
    isPointInside(p: Point, t: Triangle): boolean;
}
export declare class TriangleService implements OperateTriangle {
    area(t: Triangle): number;
    isPointInside(point: Point, triangle: Triangle): boolean;
}
export {};
