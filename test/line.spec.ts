import { Line } from "../src/entities/line.entity";
import { LineService } from "../src/services/line.service";

describe("LineService", () => {
  const service = new LineService();

  test("getLength", () => {
    const line = new Line([
      { x: 0, y: 0 },
      { x: 3, y: 4 },
    ]);

    const length = service.length(line);

    expect(length).toBe(5);
  });
});
