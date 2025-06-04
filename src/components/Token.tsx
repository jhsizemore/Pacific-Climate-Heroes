import React from 'react';
import './Token.css';

export interface TokenProps {
  icon: string;
  alt?: string;
  x: number;
  y: number;
  onMouseDown?: (e: React.MouseEvent) => void;
}

const Token: React.FC<TokenProps> = ({ icon, alt = 'token', x, y, onMouseDown }) => {
  return (
    <img
      src={icon}
      alt={alt}
      className="token"
      data-testid="token"
      style={{ left: x, top: y }}
      onMouseDown={onMouseDown}
    />
  );
};

export default Token;
