import { useState, useEffect } from 'react';
import { getTrending } from '../../services/api';
import MoviesList from 'components/MoviesList/MoviesList';
import { Title } from './HomePage.styled';

export default function HomePage() {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const results = await getTrending();
        setMovies(results);
      } catch (error) {
        console.log('error', error);
      }
    }
    fetchMovies();
  }, []);

  return (
    <main>
      <Title>Trending Films</Title>
      {movies && <MoviesList movies={movies} />}
    </main>
  );
}
