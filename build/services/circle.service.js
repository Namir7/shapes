"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CircleService = void 0;
const point_service_1 = require("./point.service");
class CircleService {
    constructor() {
        this.pointService = new point_service_1.PointService();
    }
    isPointInside(point, circle) {
        const distance = this.pointService.distance(point, circle.center);
        return circle.radius > distance;
    }
}
exports.CircleService = CircleService;
