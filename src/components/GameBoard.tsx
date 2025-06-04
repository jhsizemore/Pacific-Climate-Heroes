import React, { useRef, useState } from 'react';
import boardImage from '../../assets/img/climate-hero-board.png';
import heroIcon from '../../assets/img/hero-icon.svg';
import HexGrid from './HexGrid';
import Token from './Token';
import './GameBoard.css';

const GameBoard: React.FC = () => {
  const [tokenPos, setTokenPos] = useState({ x: 100, y: 100 });
  const [dragging, setDragging] = useState(false);
  const boardRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    setDragging(true);
    e.preventDefault();
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!dragging || !boardRef.current) return;
    const rect = boardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - 32;
    const y = e.clientY - rect.top - 32;
    setTokenPos({ x, y });
  };

  const handleMouseUp = () => setDragging(false);

  return (
    <div
      ref={boardRef}
      className="game-board"
      data-testid="game-board"
      style={{ backgroundImage: `url(${boardImage})` }}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <HexGrid />
      <Token icon={heroIcon} x={tokenPos.x} y={tokenPos.y} onMouseDown={handleMouseDown} />
    </div>
  );
};

export default GameBoard;
