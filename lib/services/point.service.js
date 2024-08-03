"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PointService = void 0;
class PointService {
    distance(p1, p2) {
        const x = p1.coords.x - p2.coords.x;
        const y = p1.coords.y - p2.coords.y;
        return Math.sqrt(x ** 2 + y ** 2);
    }
}
exports.PointService = PointService;
//# sourceMappingURL=point.service.js.map