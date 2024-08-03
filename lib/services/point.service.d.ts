import { PointCoords } from "../types/types";
interface OperatePoint {
    distance(p1: PointCoords, p2: PointCoords): number;
}
export declare class PointService implements OperatePoint {
    distance(p1: PointCoords, p2: PointCoords): number;
}
export {};
