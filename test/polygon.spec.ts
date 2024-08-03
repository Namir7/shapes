import { Point } from "../src/entities/point.entity";
import { Polygon } from "../src/entities/polygon.entity";
import { Rectangle } from "../src/entities/rectangle.entity";
import { PolygonService } from "../src/services/polygon.service";

describe("PolygonService", () => {
  const service = new PolygonService();

  describe("getBoundary", () => {
    test("positive", () => {
      const polygon = new Polygon([
        { x: 1, y: 0 },
        { x: 2, y: 1 },
        { x: 1, y: 2 },
        { x: 0.5, y: 1.5 },
        { x: 0, y: 0.5 },
        { x: 1, y: 0 },
      ]);
      const boundary = service.boundary(polygon);
      const rectangle = new Rectangle([
        { x: 0, y: 0 },
        { x: 2, y: 2 },
      ]);

      expect(boundary).toMatchObject(rectangle);
    });

    test("negative", () => {
      const polygon = new Polygon([
        { x: 1, y: 0 },
        { x: 2, y: -1 },
        { x: 1, y: 2 },
        { x: 0.5, y: 1.5 },
        { x: -2, y: 0.5 },
        { x: 1, y: 0 },
      ]);
      const boundary = service.boundary(polygon);
      const rectangle = new Rectangle([
        { x: -2, y: -1 },
        { x: 2, y: 2 },
      ]);

      expect(boundary).toMatchObject(rectangle);
    });
  });

  describe("getCenter", () => {
    test("compute correct value", () => {
      const polygon = new Polygon([
        { x: 1, y: 0 },
        { x: 2, y: 1 },
        { x: 1, y: 2 },
        { x: 0.5, y: 1.5 },
        { x: 0, y: 0.5 },
        { x: 1, y: 0 },
      ]);

      const center = service.center(polygon);
      const point = new Point({
        x: 1,
        y: 1,
      });

      expect(center).toMatchObject(point);
    });
  });
});
