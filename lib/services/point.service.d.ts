import { Point } from "../entities/point.entity";
interface OperatePoint {
    distance(p1: Point, p2: Point): number;
}
export declare class PointService implements OperatePoint {
    distance(p1: Point, p2: Point): number;
}
export {};
