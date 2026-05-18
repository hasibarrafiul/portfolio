import { render, screen } from '@testing-library/react';
import App from './App';

// Suppress the ReactDOMTestUtils.act deprecation warning in tests
beforeEach(() => {
  jest.spyOn(console, 'error').mockImplementation((msg) => {
    if (typeof msg === 'string' && msg.includes('ReactDOMTestUtils.act')) return;
    console.warn(msg);
  });
});

afterEach(() => {
  jest.restoreAllMocks();
  jest.clearAllTimers();
});

test('renders the portfolio homepage with developer name', () => {
  render(<App />);
  const heading = screen.getByText(/Hasib Ar Rafiul Fahim/i);
  expect(heading).toBeInTheDocument();
});

test('renders the developer title on homepage', () => {
  render(<App />);
  const title = screen.getByText(/Software Engineer/i);
  expect(title).toBeInTheDocument();
});

test('renders the loading screen image', () => {
  render(<App />);
  const character = screen.getByAltText(/Character/i);
  expect(character).toBeInTheDocument();
});

test('renders the sprite character on loading screen', () => {
  render(<App />);
  const character = screen.getByAltText(/Character/i);
  expect(character).toBeInTheDocument();
});
