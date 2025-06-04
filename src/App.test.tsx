import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('renders GameBoard component inside App', () => {
  const { getByTestId } = render(<App />);
  const board = getByTestId('game-board');
  expect(board).toBeInTheDocument();
});
