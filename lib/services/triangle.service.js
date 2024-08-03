"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TriangleService = void 0;
class TriangleService {
    area(t) {
        // https://www.treugolniki.ru/ploshhad-treugolnika-po-koordinatam-vershin/
        const length1 = t.coords[1].x - t.coords[0].x;
        const length2 = t.coords[2].y - t.coords[0].y;
        const lenght3 = t.coords[2].x - t.coords[0].x;
        const lenght4 = t.coords[1].y - t.coords[0].y;
        return (1 / 2) * Math.abs(length1 * length2 - lenght3 * lenght4);
    }
    isPointInside(point, triangle) {
        // https://planetcalc.ru/8108/
        const { x: x0, y: y0 } = point.coords;
        const [{ x: x1, y: y1 }, { x: x2, y: y2 }, { x: x3, y: y3 }] = triangle.coords;
        const a = (x1 - x0) * (y2 - y1) - (x2 - x1) * (y1 - y0);
        const b = (x2 - x0) * (y3 - y2) - (x3 - x2) * (y2 - y0);
        const c = (x3 - x0) * (y1 - y3) - (x1 - x3) * (y3 - y0);
        const isVectorsPositive = a >= 0 && b >= 0 && c >= 0;
        const isVectorsNegative = a <= 0 && b <= 0 && c <= 0;
        return isVectorsPositive || isVectorsNegative;
    }
}
exports.TriangleService = TriangleService;
//# sourceMappingURL=triangle.service.js.map