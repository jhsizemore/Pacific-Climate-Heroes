import React from 'react';
import './HexGrid.css';

const HexGrid: React.FC = () => {
  return (
    <svg className="hex-grid" data-testid="hex-grid" viewBox="0 0 800 600" width="800" height="600">
      <defs>
        <pattern id="hexPattern" width="60" height="52" patternUnits="userSpaceOnUse" patternTransform="translate(30,26)"
        >
          <polygon points="30,0 60,15 60,45 30,60 0,45 0,15" fill="none" stroke="rgba(0,0,0,0.2)" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="800" height="600" fill="url(#hexPattern)" />
    </svg>
  );
};

export default HexGrid;
