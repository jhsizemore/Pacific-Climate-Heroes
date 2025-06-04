import React, { useRef, useState } from 'react';
import boardImage from '../../assets/img/climate-hero-board.png';
import heroIcon from '../../assets/img/hero-icon.svg';
import HexGrid, { HexGridProps } from './HexGrid';
import Token from './Token';
import './GameBoard.css';

const GameBoard: React.FC = () => {
  const [tokenPos, setTokenPos] = useState({ x: 100, y: 100 });
  const [dragging, setDragging] = useState(false);
  const [outOfBounds, setOutOfBounds] = useState(false);
  const boardRef = useRef<HTMLDivElement>(null);

  const BASE_GRID: HexGridProps = {
    width: 800,
    height: 600,
    hexWidth: 60,
    hexHeight: 52,
    offsetX: 30,
    offsetY: 26
  };

  const getGridConfig = (): HexGridProps => {
    if (!boardRef.current) return BASE_GRID;
    const rect = boardRef.current.getBoundingClientRect();
    const scaleX = rect.width / BASE_GRID.width;
    const scaleY = rect.height / BASE_GRID.height;
    return {
      width: rect.width,
      height: rect.height,
      hexWidth: BASE_GRID.hexWidth * scaleX,
      hexHeight: BASE_GRID.hexHeight * scaleY,
      offsetX: BASE_GRID.offsetX * scaleX,
      offsetY: BASE_GRID.offsetY * scaleY
    };
  };

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
    const { hexWidth, hexHeight, offsetX, offsetY } = getGridConfig();

    const centerX = x + 32;
    const centerY = y + 32;
    const gridX = Math.round((centerX - offsetX) / hexWidth) * hexWidth + offsetX;
    const gridY = Math.round((centerY - offsetY) / hexHeight) * hexHeight + offsetY;
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
      <HexGrid {...getGridConfig()} />
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
