import React from 'react';
import './Token.css';

export interface TokenProps {
  id: number;
  icon: string;
  alt?: string;
  x: number;
  y: number;
  outOfBounds?: boolean;
  onMouseDown?: (e: React.MouseEvent) => void;
}

const Token: React.FC<TokenProps> = ({
  id,
  icon,
  alt = 'token',
  x,
  y,
  outOfBounds = false,
  onMouseDown
}) => {
  return (
    <img
      src={icon}
      alt={alt}
      className={`token${outOfBounds ? ' out-of-bounds' : ''}`}
      data-testid={`token-${id}`}
      data-out-of-bounds={outOfBounds}
      style={{ left: x, top: y }}
      onMouseDown={onMouseDown}
    />
  );
};

export default Token;
