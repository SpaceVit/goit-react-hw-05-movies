import { Link, useLocation } from 'react-router-dom';
import {
  Container,
  FilmsList,
  Item,
  FilmPoster,
  Title,
} from './MoviesList.styled';

export default function MoviesList({ movies }) {
  const location = useLocation();
  return (
    <Container>
      <FilmsList>
        {movies &&
          movies.map(movie => (
            <Item key={movie.id}>
              <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                <FilmPoster
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={movie.original_title}
                />
                <Title>{movie.name || movie.original_title}</Title>
              </Link>
            </Item>
          ))}
      </FilmsList>
    </Container>
  );
}
