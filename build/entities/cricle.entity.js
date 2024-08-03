"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cricle = void 0;
const types_1 = require("../types/types");
class Cricle {
    constructor(center, radius) {
        this.shape = types_1.ShapeType.Circle;
        this.center = center;
        this.radius = radius;
    }
}
exports.Cricle = Cricle;
