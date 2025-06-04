import React, { useRef, useState } from 'react';
import boardImage from '../../assets/img/board.png';

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

    </div>
  );
};

export default GameBoard;
