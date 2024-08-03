import { Polygon } from '../entities/polygon.entity';
import { Rectangle } from '../entities/rectangle.entity';
import { PointCoords } from '../types/types';
interface OperatePolygon {
    center(p: Polygon): PointCoords;
    boundary(p: Polygon): Rectangle;
    isPointInside(p: PointCoords, pol: Polygon): boolean;
    isInclude(inner: Polygon, outer: Polygon): boolean;
    isIntersection(pol1: Polygon, pol2: Polygon): boolean;
}
export declare class PolygonService implements OperatePolygon {
    private triangleService;
    center(polygon: Polygon): {
        x: number;
        y: number;
    };
    boundary(ploygon: Polygon): Rectangle;
    isPointInside(point: PointCoords, polygon: Polygon): boolean;
    isInclude(inner: Polygon, outer: Polygon): boolean;
    isIntersection(poligon1: Polygon, polygon2: Polygon): boolean;
}
export {};
