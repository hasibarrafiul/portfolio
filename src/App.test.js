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

test('renders the platform image', () => {
  render(<App />);
  const platform = screen.getByAltText(/Platform/i);
  expect(platform).toBeInTheDocument();
});

test('renders the sprite character', () => {
  render(<App />);
  const sprite = screen.getByAltText(/Sprite/i);
  expect(sprite).toBeInTheDocument();
});
