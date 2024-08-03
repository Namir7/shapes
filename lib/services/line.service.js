"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LineService = void 0;
const point_entity_1 = require("../entities/point.entity");
const point_service_1 = require("./point.service");
class LineService {
    constructor() {
        this.pointService = new point_service_1.PointService();
    }
    length(line) {
        let acc = 0;
        for (let i = 0; i < line.coords.length - 1; i++) {
            const c1 = new point_entity_1.Point(line.coords[i]);
            const c2 = new point_entity_1.Point(line.coords[i + 1]);
            const distance = this.pointService.distance(c1, c2);
            acc += distance;
        }
        return acc;
    }
}
exports.LineService = LineService;
//# sourceMappingURL=line.service.js.map