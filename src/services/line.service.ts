import { Line } from "../entities/line.entity";
import { PointService } from "./point.service";

interface OperateLine {
  length(l: Line): number;
}

export class LineService implements OperateLine {
  private pointService = new PointService();

  length(line: Line): number {
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
