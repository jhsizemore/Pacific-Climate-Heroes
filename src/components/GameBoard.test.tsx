import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import GameBoard from './GameBoard';

test('renders game board with background image', () => {
  const { getByTestId } = render(<GameBoard />);
  const board = getByTestId('game-board');
  expect(board).toBeInTheDocument();
  expect(board.style.backgroundImage).not.toBe('');
  expect(getByTestId('hex-grid')).toBeInTheDocument();
});

test('snaps token to nearest hex on drop', () => {
  const { getByTestId } = render(<GameBoard />);
  const board = getByTestId('game-board');
  const token = getByTestId('token-1');

  jest.spyOn(board, 'getBoundingClientRect').mockReturnValue({
    left: 0,
    top: 0,
    right: 800,
    bottom: 600,
    width: 800,
    height: 600,
    x: 0,
    y: 0,
    toJSON: () => {}
  });

  fireEvent.mouseDown(token);
  fireEvent.mouseMove(board, { clientX: 140, clientY: 120 });
  fireEvent.mouseUp(board);

  const left = parseInt(token.style.left, 10);
  const top = parseInt(token.style.top, 10);
  expect(left).toBe(168);
  expect(top).toBe(117);
});

test('detects when token moves out of bounds', () => {
  const { getByTestId } = render(<GameBoard />);
  const board = getByTestId('game-board');
  const token = getByTestId('token-1');

  jest.spyOn(board, 'getBoundingClientRect').mockReturnValue({
    left: 0,
    top: 0,
    right: 200,
    bottom: 200,
    width: 200,
    height: 200,
    x: 0,
    y: 0,
    toJSON: () => {}
  });

  fireEvent.mouseDown(token);
  fireEvent.mouseMove(board, { clientX: 250, clientY: 250 });

  expect(token.getAttribute('data-out-of-bounds')).toBe('true');
});

test('clamps token within board boundaries', () => {
  const { getByTestId } = render(<GameBoard />);
  const board = getByTestId('game-board');
  const token = getByTestId('token-1');

  jest.spyOn(board, 'getBoundingClientRect').mockReturnValue({
    left: 0,
    top: 0,
    right: 200,
    bottom: 200,
    width: 200,
    height: 200,
    x: 0,
    y: 0,
    toJSON: () => {}
  });

  fireEvent.mouseDown(token);
  fireEvent.mouseMove(board, { clientX: 300, clientY: 300 });

  const left = parseInt(token.style.left, 10);
  const top = parseInt(token.style.top, 10);
  expect(left).toBe(136); // 200 - 64
  expect(top).toBe(136);
});

