"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PointService = void 0;
class PointService {
    distance(p1, p2) {
        return Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2);
    }
}
exports.PointService = PointService;
//# sourceMappingURL=point.service.js.map