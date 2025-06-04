import React, { useRef, useState } from 'react';
import boardImage from '../../assets/img/board.png';
import heroIcon from '../../assets/img/hero-icon.svg';
import HexGrid from './HexGrid';
import {
  BOARD_WIDTH,
  BOARD_HEIGHT,
  TOKEN_SIZE,
  pixelToHex,
  hexToPixel
} from '../utils/hex';
import Token from './Token';
import './GameBoard.css';

interface TokenState {
  id: number;
  x: number;
  y: number;
  outOfBounds: boolean;
}

const GameBoard: React.FC = () => {
  const [tokens, setTokens] = useState<TokenState[]>([
    { id: 1, x: 100, y: 100, outOfBounds: false },
    { id: 2, x: 200, y: 100, outOfBounds: false }
  ]);
  const [draggingId, setDraggingId] = useState<number | null>(null);
  const boardRef = useRef<HTMLDivElement>(null);

  const clamp = (val: number, min: number, max: number) =>
    Math.max(min, Math.min(max, val));


  const handleMouseDown = (id: number) => (e: React.MouseEvent) => {
    setDraggingId(id);
    e.preventDefault();
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (draggingId === null || !boardRef.current) return;
    const rect = boardRef.current.getBoundingClientRect();
    const rawX = e.clientX - rect.left - TOKEN_SIZE / 2;
    const rawY = e.clientY - rect.top - TOKEN_SIZE / 2;
    const clampedX = clamp(rawX, 0, rect.width - TOKEN_SIZE);
    const clampedY = clamp(rawY, 0, rect.height - TOKEN_SIZE);
    setTokens(toks =>
      toks.map(t =>
        t.id === draggingId
          ? { ...t, x: clampedX, y: clampedY, outOfBounds: isOutsideBoard(rawX, rawY) }
          : t
      )
    );
  };

  const isOutsideBoard = (x: number, y: number) => {
    if (!boardRef.current) return false;
    const rect = boardRef.current.getBoundingClientRect();
    const size = TOKEN_SIZE;
    return (
      x < 0 ||
      y < 0 ||
      x + size > rect.width ||
      y + size > rect.height
    );
  };

  const snapToHex = (x: number, y: number) => {
    const { q, r } = pixelToHex(x + TOKEN_SIZE / 2, y + TOKEN_SIZE / 2);
    const pos = hexToPixel(q, r);
    return { x: pos.x - TOKEN_SIZE / 2, y: pos.y - TOKEN_SIZE / 2 };
  };

  const handleMouseUp = () => {
    if (draggingId === null) return;
    setTokens(toks =>
      toks.map(t => {
        if (t.id !== draggingId) return t;
        const snapped = snapToHex(t.x, t.y);
        if (!boardRef.current) return { ...t, ...snapped, outOfBounds: false };
        const rect = boardRef.current.getBoundingClientRect();
        const x = clamp(snapped.x, 0, rect.width - TOKEN_SIZE);
        const y = clamp(snapped.y, 0, rect.height - TOKEN_SIZE);
        return { ...t, x, y, outOfBounds: false };
      })
    );
    setDraggingId(null);
  };

  return (
    <div
      ref={boardRef}
      className="game-board"
      data-testid="game-board"
      style={{
        backgroundImage: `url(${boardImage})`,
        width: BOARD_WIDTH,
        height: BOARD_HEIGHT
      }}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <HexGrid />
      {tokens.map(t => (
        <Token
          key={t.id}
          id={t.id}
          icon={heroIcon}
          x={t.x}
          y={t.y}
          outOfBounds={t.outOfBounds}
          onMouseDown={handleMouseDown(t.id)}
        />
      ))}
    </div>
  );
};

export default GameBoard;
