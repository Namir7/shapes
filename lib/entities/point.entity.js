"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point = void 0;
const types_1 = require("../types");
class Point {
    constructor(coords) {
        this.shape = types_1.ShapeType.Point;
        this._validateCoords(coords);
        this.coords = coords;
    }
    _validateCoords(coords) {
        const isObject = typeof coords === "object";
        const isNumber = typeof coords.x === "number" && typeof coords.y === "number";
        if (!isObject || !isNumber) {
            throw new Error(`ValidateError: not valid point coords: ${coords}`);
        }
    }
}
exports.Point = Point;
//# sourceMappingURL=point.entity.js.map