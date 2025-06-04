export const BOARD_WIDTH = 1120;
export const BOARD_HEIGHT = 768;
export const HEX_RADIUS = 80;
export const TOKEN_SIZE = 64;

export interface Axial {
  q: number;
  r: number;
}

export function hexToPixel(q: number, r: number, originX = HEX_RADIUS, originY = HEX_RADIUS): { x: number; y: number } {
  const x = HEX_RADIUS * (1.5 * q) + originX;
  const y = HEX_RADIUS * (Math.sqrt(3) * (r + q / 2)) + originY;
  return { x, y };
}

export function pixelToHex(x: number, y: number, originX = HEX_RADIUS, originY = HEX_RADIUS): Axial {
  const px = x - originX;
  const py = y - originY;
  const q = (2 / 3) * px / HEX_RADIUS;
  const r = (-1 / 3) * px / HEX_RADIUS + (Math.sqrt(3) / 3) * py / HEX_RADIUS;
  return hexRound(q, r);
}

export function hexRound(q: number, r: number): Axial {
  let x = q;
  let z = r;
  let y = -x - z;
  let rx = Math.round(x);
  let ry = Math.round(y);
  let rz = Math.round(z);
  const xDiff = Math.abs(rx - x);
  const yDiff = Math.abs(ry - y);
  const zDiff = Math.abs(rz - z);
  if (xDiff > yDiff && xDiff > zDiff) {
    rx = -ry - rz;
  } else if (yDiff > zDiff) {
    ry = -rx - rz;
  } else {
    rz = -rx - ry;
  }
  return { q: rx, r: rz };
}

export function getHexPoints(cx: number, cy: number, r: number = HEX_RADIUS): string {
  const points: string[] = [];
  for (let i = 0; i < 6; i++) {
    const angle = Math.PI / 3 * i;
    const x = cx + r * Math.cos(angle);
    const y = cy + r * Math.sin(angle);
    points.push(`${x},${y}`);
  }
  return points.join(' ');
}
