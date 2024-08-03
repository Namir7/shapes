import { Cricle } from "../entities/cricle.entity";
import { PointCoords } from "../types/types";
interface OperateCircle {
    isPointInside(p: PointCoords, c: Cricle): boolean;
}
export declare class CircleService implements OperateCircle {
    private pointService;
    isPointInside(point: PointCoords, circle: Cricle): boolean;
}
export {};
