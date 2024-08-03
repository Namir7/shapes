import { Cricle } from "../src/entities/cricle.entity";
import { Point } from "../src/entities/point.entity";
import { CircleService } from "../src/services/circle.service";

describe("CircleService", () => {
  const service = new CircleService();

  describe("isPointInside", () => {
    test("inside", () => {
      const point = new Point({ x: 1, y: 1 });
      const circle = new Cricle({ x: 0, y: 0 }, 2);

      const isInside = service.isPointInside(point, circle);

      expect(isInside).toBe(true);
    });

    test("outside", () => {
      const point = new Point({ x: 2, y: 2 });
      const circle = new Cricle({ x: 0, y: 0 }, 1);

      const isInside = service.isPointInside(point, circle);

      expect(isInside).toBe(false);
    });
  });
});
