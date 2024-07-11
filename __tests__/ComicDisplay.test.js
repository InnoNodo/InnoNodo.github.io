import { render, screen, fireEvent } from '@testing-library/react';
import ComicDisplay from '../src/components/ComicDisplay';
import axios from 'axios';

jest.mock('axios');

test('renders email input and submit button', () => {
  render(<ComicDisplay initialComic={null} />);
  expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
});

test('renders comic data', () => {
  const mockComic = {
    img: 'https://example.com/comic.png',
    alt: 'example comic',
    safe_title: 'Example Comic',
    year: '2024',
    month: '07',
    day: '11',
  };

  render(<ComicDisplay initialComic={mockComic} />);
  expect(screen.getByAltText('example comic')).toBeInTheDocument();
  expect(screen.getByText(/title: example comic/i)).toBeInTheDocument();
  expect(screen.getByText(/uploaded on: 07\/11\/2024/i)).toBeInTheDocument();
});

test('submits email and fetches comic data', async () => {
  const mockEmailResponse = { data: '123' };
  const mockComicResponse = {
    data: {
      img: 'https://example.com/comic.png',
      alt: 'example comic',
      safe_title: 'Example Comic',
      year: '2024',
      month: '07',
      day: '11',
    },
  };

  axios.get.mockResolvedValueOnce(mockEmailResponse);
  axios.get.mockResolvedValueOnce(mockComicResponse);

  render(<ComicDisplay initialComic={null} />);
  fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'test@example.com' } });
  fireEvent.click(screen.getByRole('button', { name: /submit/i }));

  expect(await screen.findByAltText('example comic')).toBeInTheDocument();
  expect(screen.getByText(/title: example comic/i)).toBeInTheDocument();
  expect(screen.getByText(/uploaded on: 07\/11\/2024/i)).toBeInTheDocument();
});
