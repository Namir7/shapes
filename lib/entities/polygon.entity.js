"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Polygon = void 0;
const types_1 = require("../types");
class Polygon {
    constructor(coords) {
        this.shape = types_1.ShapeType.Polygon;
        this._validateCoords(coords);
        this.coords = coords;
    }
    _validateCoords(coords) {
        if (coords.length < 4) {
            throw new Error(`ValidateError: not valid polygon coords: ${coords}`);
        }
        const first = coords[0];
        const last = coords[coords.length - 1];
        const isClosed = first.x === last.x && first.y === last.y;
        if (!isClosed) {
            throw new Error(`ValidateError: not valid polygon coords: ${coords}, NotClosed`);
        }
    }
}
exports.Polygon = Polygon;
//# sourceMappingURL=polygon.entity.js.map