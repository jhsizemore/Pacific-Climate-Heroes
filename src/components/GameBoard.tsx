import React, { useRef, useState } from 'react';
import boardImage from '../../assets/img/climate-hero-board.png';
import heroIcon from '../../assets/img/hero-icon.svg';
import HexGrid from './HexGrid';
import Token from './Token';
import './GameBoard.css';

const GameBoard: React.FC = () => {
  const [tokenPos, setTokenPos] = useState({ x: 100, y: 100 });
  const [dragging, setDragging] = useState(false);
  const [outOfBounds, setOutOfBounds] = useState(false);
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
    setOutOfBounds(isOutsideBoard(x, y));
  };

  const isOutsideBoard = (x: number, y: number) => {
    if (!boardRef.current) return false;
    const rect = boardRef.current.getBoundingClientRect();
    const size = 64;
    return (
      x < 0 ||
      y < 0 ||
      x + size > rect.width ||
      y + size > rect.height
    );
  };

  const snapToHex = (x: number, y: number) => {
    const HEX_WIDTH = 60;
    const HEX_HEIGHT = 52;
    const OFFSET_X = 30;
    const OFFSET_Y = 26;

    const centerX = x + 32;
    const centerY = y + 32;
    const gridX = Math.round((centerX - OFFSET_X) / HEX_WIDTH) * HEX_WIDTH + OFFSET_X;
    const gridY = Math.round((centerY - OFFSET_Y) / HEX_HEIGHT) * HEX_HEIGHT + OFFSET_Y;
    return { x: gridX - 32, y: gridY - 32 };
  };

  const handleMouseUp = () => {
    setDragging(false);
    setTokenPos(pos => snapToHex(pos.x, pos.y));
  };

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
      <Token
        icon={heroIcon}
        x={tokenPos.x}
        y={tokenPos.y}
        outOfBounds={outOfBounds}
        onMouseDown={handleMouseDown}
      />
    </div>
  );
};

export default GameBoard;
