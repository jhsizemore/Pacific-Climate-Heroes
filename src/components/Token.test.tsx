import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Token from './Token';
import heroIcon from '../../assets/img/hero-icon.svg';

test('renders token image', () => {
  const { getByTestId } = render(
    <Token id={1} icon={heroIcon} alt="Hero" x={0} y={0} />
  );
  const token = getByTestId('token-1') as HTMLImageElement;
  expect(token).toBeInTheDocument();
  expect(token.alt).toBe('Hero');
});
