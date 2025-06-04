import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Token from './Token';
import heroIcon from '../../assets/img/hero-icon.svg';

test('renders token image', () => {
  const { getByTestId } = render(<Token icon={heroIcon} alt="Hero" />);
  const token = getByTestId('token') as HTMLImageElement;
  expect(token).toBeInTheDocument();
  expect(token.alt).toBe('Hero');
});
