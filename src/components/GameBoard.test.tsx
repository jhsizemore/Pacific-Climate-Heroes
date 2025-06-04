import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import GameBoard from './GameBoard';

test('renders game board with background image', () => {
  const { getByTestId } = render(<GameBoard />);
  const board = getByTestId('game-board');
  expect(board).toBeInTheDocument();
  expect(board.style.backgroundImage).not.toBe('');
});
