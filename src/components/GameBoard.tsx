import React from 'react';
import boardImage from '../../assets/img/climate-hero-board.png';
import './GameBoard.css';

const GameBoard: React.FC = () => {
  return (
    <div
      className="game-board"
      data-testid="game-board"
      style={{ backgroundImage: `url(${boardImage})` }}
    />
  );
};

export default GameBoard;
