import { Line } from "../entities/line.entity";
interface OperateLine {
    length(l: Line): number;
}
export declare class LineService implements OperateLine {
    private pointService;
    length(line: Line): number;
}
export {};
