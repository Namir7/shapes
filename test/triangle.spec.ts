import { Point } from "../src/entities/point.entity";
import { Triangle } from "../src/entities/triangle.entity";
import { TriangleService } from "../src/services/triangle.service";

describe("TriangleService", () => {
  const service = new TriangleService();

  describe("isPointInside", () => {
    test("inside", () => {
      const point = new Point({ x: 1, y: 1 });
      const triangle = new Triangle([
        { x: 0, y: 0 },
        { x: 3, y: 0 },
        { x: 0, y: 4 },
      ]);

      const isInside = service.isPointInside(point, triangle);

      expect(isInside).toBe(true);
    });

    test("outside", () => {
      const point = new Point({ x: 3, y: 3 });
      const triangle = new Triangle([
        { x: 0, y: 0 },
        { x: 1, y: 0 },
        { x: 0, y: 1 },
      ]);

      const isInside = service.isPointInside(point, triangle);

      expect(isInside).toBe(false);
    });

    test("on apex", () => {
      const point = new Point({ x: 0, y: 0.5 });
      const triangle = new Triangle([
        { x: 0, y: 0 },
        { x: 1, y: 0 },
        { x: 0, y: 1 },
      ]);

      const isInside = service.isPointInside(point, triangle);

      expect(isInside).toBe(true);
    });

    test("on edge", () => {
      const point = new Point({ x: 0, y: 0.5 });
      const triangle = new Triangle([
        { x: 0, y: 0 },
        { x: 1, y: 0 },
        { x: 0, y: 1 },
      ]);

      const isInside = service.isPointInside(point, triangle);

      expect(isInside).toBe(true);
    });
  });
});
