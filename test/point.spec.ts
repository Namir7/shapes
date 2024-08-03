import { Point } from "../src/entities/point.entity";
import { PointService } from "../src/services/point.service";

describe("PointService", () => {
  const service = new PointService();

  describe("getDistance", () => {
    test("compute correct value", () => {
      const p1 = new Point({
        x: 0,
        y: 0,
      });

      const p2 = new Point({
        x: 0,
        y: 1,
      });

      const distance = service.distance(p1, p2);

      expect(distance).toBe(1);
    });
  });
});
