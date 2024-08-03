"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolygonService = void 0;
const point_entity_1 = require("../entities/point.entity");
const rectangle_entity_1 = require("../entities/rectangle.entity");
const triangle_entity_1 = require("../entities/triangle.entity");
const triangle_service_1 = require("./triangle.service");
class PolygonService {
    constructor() {
        this.triangleService = new triangle_service_1.TriangleService();
    }
    center(polygon) {
        const boundary = this.boundary(polygon);
        const x = (boundary.coords[1].x + boundary.coords[0].x) / 2;
        const y = (boundary.coords[1].y + boundary.coords[0].y) / 2;
        return new point_entity_1.Point({ x, y });
    }
    boundary(ploygon) {
        const [p1, p2] = ploygon.coords.reduce((acc, current) => {
            const [p0, p1] = acc;
            if (current.x < p0.x) {
                p0.x = current.x;
            }
            if (current.y < p0.y) {
                p0.y = current.y;
            }
            if (current.x > p1.x) {
                p1.x = current.x;
            }
            if (current.y > p1.y) {
                p1.y = current.y;
            }
            return [p0, p1];
        }, [
            { x: Infinity, y: Infinity },
            { x: -Infinity, y: -Infinity },
        ]);
        return new rectangle_entity_1.Rectangle([p1, p2]);
    }
    isPointInside(point, polygon) {
        const center = this.center(polygon);
        for (let i = 0; i < polygon.coords.length - 1; i++) {
            const triangle = new triangle_entity_1.Triangle([
                polygon.coords[i],
                polygon.coords[i + 1],
                center.coords,
            ]);
            const isInside = this.triangleService.isPointInside(point, triangle);
            if (isInside) {
                return true;
            }
        }
        return false;
    }
    isInclude(inner, outer) {
        for (const coords of inner.coords) {
            const isInside = this.isPointInside(new point_entity_1.Point(coords), outer);
            if (!isInside) {
                return false;
            }
        }
        return true;
    }
    isIntersection(poligon1, polygon2) {
        for (const coords of poligon1.coords) {
            const isPointInside = this.isPointInside(new point_entity_1.Point(coords), polygon2);
            if (isPointInside) {
                return true;
            }
        }
        return false;
    }
}
exports.PolygonService = PolygonService;
//# sourceMappingURL=polygon.service.js.map