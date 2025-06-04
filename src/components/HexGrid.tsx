import React from 'react';
import {
  BOARD_WIDTH,
  BOARD_HEIGHT,
  HEX_RADIUS,
  hexToPixel,
  getHexPoints,
} from '../utils/hex';
import './HexGrid.css';

const HexGrid: React.FC = () => {
  const hexes: JSX.Element[] = [];
  const qCount = Math.ceil(BOARD_WIDTH / (HEX_RADIUS * 1.5));
  const rCount = Math.ceil(BOARD_HEIGHT / (HEX_RADIUS * Math.sqrt(3)));

  for (let q = -1; q <= qCount; q++) {
    for (let r = -1; r <= rCount; r++) {
      const { x, y } = hexToPixel(q, r);
      if (
        x < -HEX_RADIUS ||
        y < -HEX_RADIUS ||
        x > BOARD_WIDTH + HEX_RADIUS ||
        y > BOARD_HEIGHT + HEX_RADIUS
      ) {
        continue;
      }
      hexes.push(
        <polygon
          key={`${q}-${r}`}
          points={getHexPoints(x, y)}
          fill="none"
          stroke="rgba(255,255,255,0.3)"
          strokeWidth={4}
          strokeLinejoin="round"
        />
      );
    }
  }

  return (
    <svg
      className="hex-grid"
      data-testid="hex-grid"
      width={BOARD_WIDTH}
      height={BOARD_HEIGHT}
      viewBox={`0 0 ${BOARD_WIDTH} ${BOARD_HEIGHT}`}
    >
      {hexes}
    </svg>
  );
};

export default HexGrid;
