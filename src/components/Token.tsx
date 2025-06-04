import React from 'react';
import './Token.css';

export interface TokenProps {
  icon: string;
  alt?: string;
}

const Token: React.FC<TokenProps> = ({ icon, alt = 'token' }) => {
  return <img src={icon} alt={alt} className="token" data-testid="token" />;
};

export default Token;
