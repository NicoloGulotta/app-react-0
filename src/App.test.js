import { render, screen } from '@testing-library/react';
import App from './App';
import CommentArea from './components/CommentArea';

test('renders', () => {
  render(<App />);

  const MyNav = screen.getByTestId("Navbar");
  expect(MyNav).toBeInTheDocument();

  const CommentArea = screen.getByTestId("Comment");
  expect(CommentArea).toBeInTheDocument();

  const allTheBookCards = screen.getAllByTestId('book-card')
  expect(allTheBookCards).toHaveLength(150)
});

