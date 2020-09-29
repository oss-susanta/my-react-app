import React from 'react';
import {render, screen} from '@testing-library/react';
import App from './index';

test('sanity', () => {
  render(<App />);
  const div = screen.getByText('Hello, World!');
  expect(div).toBeInTheDocument();
});