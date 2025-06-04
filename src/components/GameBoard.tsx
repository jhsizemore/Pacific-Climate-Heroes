import React from 'react';
import boardImage from '../../assets/img/climate-hero-board.png';
import HexGrid from './HexGrid';
import './GameBoard.css';

const GameBoard: React.FC = () => {
  return (
    <div
      className="game-board"
      data-testid="game-board"
      style={{ backgroundImage: `url(${boardImage})` }}
    >
      <HexGrid />
    </div>
  );
};

export default GameBoard;
