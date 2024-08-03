"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Triangle = void 0;
const types_1 = require("../types/types");
class Triangle {
    constructor(coords) {
        this.shape = types_1.ShapeType.Triangle;
        this._validateCoords(coords);
        this.coords = coords;
    }
    _validateCoords(coords) {
        if (coords.length !== 3) {
            throw new Error(`ValidateError: not valid triangle coords: ${coords}`);
        }
    }
}
exports.Triangle = Triangle;
