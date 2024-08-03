"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolygonConvex = exports.LineIntersecting = exports.ShapeType = void 0;
var ShapeType;
(function (ShapeType) {
    ShapeType["Point"] = "POINT";
    // ломаная линия
    ShapeType["Line"] = "LINE";
    // отрезок
    ShapeType["LineSegment"] = "LINE_SEGMENT";
    ShapeType["Triangle"] = "TRIANGLE";
    ShapeType["Rectangle"] = "RECTANGLE";
    ShapeType["Polygon"] = "POLYGON";
    ShapeType["Circle"] = "CIRCLE";
})(ShapeType || (exports.ShapeType = ShapeType = {}));
var LineIntersecting;
(function (LineIntersecting) {
    LineIntersecting["Intersecting"] = "INTERSECTING";
    LineIntersecting["NotIntersecting"] = "NOT_INTERSECTING";
})(LineIntersecting || (exports.LineIntersecting = LineIntersecting = {}));
var PolygonConvex;
(function (PolygonConvex) {
    PolygonConvex["Convex"] = "CONVEX";
    PolygonConvex["NotConvex"] = "NOT_CONVEX";
})(PolygonConvex || (exports.PolygonConvex = PolygonConvex = {}));
