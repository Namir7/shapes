import { Cricle } from "../entities/cricle.entity";
import { Point } from "../entities/point.entity";
interface OperateCircle {
    isPointInside(p: Point, c: Cricle): boolean;
}
export declare class CircleService implements OperateCircle {
    private pointService;
    isPointInside(point: Point, circle: Cricle): boolean;
}
export {};
