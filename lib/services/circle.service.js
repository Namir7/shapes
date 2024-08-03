"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CircleService = void 0;
const point_entity_1 = require("../entities/point.entity");
const point_service_1 = require("./point.service");
class CircleService {
    constructor() {
        this.pointService = new point_service_1.PointService();
    }
    isPointInside(point, circle) {
        const center = new point_entity_1.Point(circle.center);
        const distance = this.pointService.distance(point, center);
        return circle.radius > distance;
    }
}
exports.CircleService = CircleService;
//# sourceMappingURL=circle.service.js.map