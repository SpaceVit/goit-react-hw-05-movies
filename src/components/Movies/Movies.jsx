import { useState, useEffect } from 'react';
import { serchMovies } from '../../services/api';
import { VscSearch } from 'react-icons/vsc';
import { toast } from 'react-toastify';
import MoviesList from 'components/MoviesList/MoviesList';
import { Button, Input, StyledForm } from './Movies.styled';
import { useSearchParams } from 'react-router-dom';

export default function Movies() {
  const [movies, setMovies] = useState(null);
  const [value, setValue] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query');

  useEffect(() => {
    async function getMoviesByQuery() {
      try {
        const results = await serchMovies(query);
        setMovies(results);

        if (results.length === 0) {
          toast.info(`There are no movies with the name ${query}`);
        }
      } catch (error) {
        console.log('error', error);
      }
    }
    query && getMoviesByQuery();
  }, [query]);

  const handleInputChange = e => {
    const { value } = e.target;
    setValue(value);
  };

  const handleSubmitForm = e => {
    e.preventDefault();
    if (value.trim() === '') {
      toast.info('I didn`t catch what you are looking for. Enter movie name.');
    } else {
      setSearchParams({ query: value });
      setValue('');
    }
  };

  return (
    <>
      <StyledForm onSubmit={handleSubmitForm}>
        <Button type="submit">
          <VscSearch size={13} />
        </Button>

        <Input
          type="text"
          placeholder="Make a wish"
          onChange={handleInputChange}
          value={value}
        />
      </StyledForm>

      {movies && <MoviesList movies={movies} />}
    </>
  );
}
