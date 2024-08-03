import { Point } from "../entities/point.entity";
import { Polygon } from "../entities/polygon.entity";
import { Rectangle } from "../entities/rectangle.entity";
interface OperatePolygon {
    center(p: Polygon): Point;
    boundary(p: Polygon): Rectangle;
    isPointInside(p: Point, pol: Polygon): boolean;
    isInclude(inner: Polygon, outer: Polygon): boolean;
    isIntersection(pol1: Polygon, pol2: Polygon): boolean;
}
export declare class PolygonService implements OperatePolygon {
    private triangleService;
    center(polygon: Polygon): Point;
    boundary(ploygon: Polygon): Rectangle;
    isPointInside(point: Point, polygon: Polygon): boolean;
    isInclude(inner: Polygon, outer: Polygon): boolean;
    isIntersection(poligon1: Polygon, polygon2: Polygon): boolean;
}
export {};
