export type PointCoords = {
    x: number;
    y: number;
};
export declare enum ShapeType {
    Point = "POINT",
    Line = "LINE",
    LineSegment = "LINE_SEGMENT",
    Triangle = "TRIANGLE",
    Rectangle = "RECTANGLE",
    Polygon = "POLYGON",
    Circle = "CIRCLE"
}
export declare enum LineIntersecting {
    Intersecting = "INTERSECTING",
    NotIntersecting = "NOT_INTERSECTING"
}
export declare enum PolygonConvex {
    Convex = "CONVEX",
    NotConvex = "NOT_CONVEX"
}
