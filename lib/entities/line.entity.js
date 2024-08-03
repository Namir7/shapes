"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Line = void 0;
const types_1 = require("../types");
class Line {
    constructor(coords) {
        this.shape = types_1.ShapeType.Line;
        this._validateCoords(coords);
        this.coords = coords;
    }
    _validateCoords(coords) {
        if (coords.length < 2) {
            throw new Error(`ValidateError: not valid line coords: ${coords}`);
        }
    }
}
exports.Line = Line;
//# sourceMappingURL=line.entity.js.map