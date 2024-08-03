export type PointCoords = {
  x: number;
  y: number;
};

export enum ShapeType {
  Point = "POINT",
  // ломаная линия
  Line = "LINE",
  // отрезок
  LineSegment = "LINE_SEGMENT",
  Triangle = "TRIANGLE",
  Rectangle = "RECTANGLE",
  Polygon = "POLYGON",
  Circle = "CIRCLE",
}

export enum LineIntersecting {
  Intersecting = "INTERSECTING",
  NotIntersecting = "NOT_INTERSECTING",
}

export enum PolygonConvex {
  Convex = "CONVEX",
  NotConvex = "NOT_CONVEX",
}
