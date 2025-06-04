import React from 'react';
import './HexGrid.css';

export interface HexGridProps {
  width: number;
  height: number;
  hexWidth: number;
  hexHeight: number;
  offsetX: number;
  offsetY: number;
}

const HexGrid: React.FC<HexGridProps> = ({
  width,
  height,
  hexWidth,
  hexHeight,
  offsetX,
  offsetY
}) => {
  const scale = hexWidth / 60;
  const points = `
    ${30 * scale},0 
    ${60 * scale},${15 * scale} 
    ${60 * scale},${45 * scale} 
    ${30 * scale},${60 * scale} 
    0,${45 * scale} 
    0,${15 * scale}`.replace(/\s+/g, ' ').trim();

  return (
    <svg
      className="hex-grid"
      data-testid="hex-grid"
      viewBox={`0 0 ${width} ${height}`}
      width={width}
      height={height}
    >
      <defs>
        <pattern
          id="hexPattern"
          width={hexWidth}
          height={hexHeight}
          patternUnits="userSpaceOnUse"
          patternTransform={`translate(${offsetX},${offsetY})`}
        >
          <polygon
            points={points}
            fill="none"
            stroke="rgba(0,0,0,0.2)"
            strokeWidth="1"
          />
        </pattern>
      </defs>
      <rect width={width} height={height} fill="url(#hexPattern)" />
    </svg>
  );
};

export default HexGrid;
