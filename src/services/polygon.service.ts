import { Point } from "../entities/point.entity";
import { Polygon } from "../entities/polygon.entity";
import { Rectangle } from "../entities/rectangle.entity";
import { Triangle } from "../entities/triangle.entity";
import { PointCoords } from "../types";
import { TriangleService } from "./triangle.service";

interface OperatePolygon {
  center(p: Polygon): Point;
  boundary(p: Polygon): Rectangle;
  isPointInside(p: Point, pol: Polygon): boolean;
  isInclude(inner: Polygon, outer: Polygon): boolean;
  isIntersection(pol1: Polygon, pol2: Polygon): boolean;
}

export class PolygonService implements OperatePolygon {
  private triangleService = new TriangleService();

  center(polygon: Polygon) {
    const boundary = this.boundary(polygon);

    const x = (boundary.coords[0].x - boundary.coords[1].x) / 2;
    const y = (boundary.coords[0].y - boundary.coords[1].x) / 2;

    return new Point({ x, y });
  }

  boundary(ploygon: Polygon) {
    const [p1, p2] = ploygon.coords.reduce<[PointCoords, PointCoords]>(
      (acc, current) => {
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
      },
      [
        { x: -Infinity, y: -Infinity },
        { x: Infinity, y: Infinity },
      ]
    );

    return new Rectangle([p1, p2]);
  }

  isPointInside(point: Point, polygon: Polygon) {
    const center = this.center(polygon);

    for (let i = 0; i < polygon.coords.length - 1; i++) {
      const triangle = new Triangle([
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

  isInclude(inner: Polygon, outer: Polygon) {
    for (const coords of inner.coords) {
      const isInside = this.isPointInside(new Point(coords), outer);

      if (!isInside) {
        return false;
      }
    }

    return true;
  }

  isIntersection(poligon1: Polygon, polygon2: Polygon) {
    for (const coords of poligon1.coords) {
      const isPointInside = this.isPointInside(new Point(coords), polygon2);

      if (isPointInside) {
        return true;
      }
    }

    return false;
  }
}
