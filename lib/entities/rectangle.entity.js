"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = void 0;
const types_1 = require("../types/types");
class Rectangle {
    constructor(coords) {
        this.shape = types_1.ShapeType.Rectangle;
        this._validateCoords(coords);
        this.coords = coords;
    }
    _validateCoords(coords) {
        const xValid = coords[0].x < coords[1].x;
        const yValid = coords[0].y < coords[1].y;
        if (!(xValid && yValid)) {
            throw new Error(`ValidateError: not valid rectangle coords: ${coords}`);
        }
    }
}
exports.Rectangle = Rectangle;
//# sourceMappingURL=rectangle.entity.js.map