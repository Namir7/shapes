"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LineService = void 0;
const point_service_1 = require("./point.service");
class LineService {
    constructor() {
        this.pointService = new point_service_1.PointService();
    }
    length(line) {
        let acc = 0;
        for (let i = 0; i < line.coords.length - 1; i++) {
            const c1 = line.coords[i];
            const c2 = line.coords[i + 1];
            const distance = this.pointService.distance(c1, c2);
            acc += distance;
        }
        return acc;
    }
}
exports.LineService = LineService;
//# sourceMappingURL=line.service.js.map