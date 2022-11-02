import { useState, useEffect } from 'react';
import { NavLink, useSearchParams } from 'react-router-dom';
import { SearchBar } from 'components/SearchBar';
import { getsearchingMovieApi } from '../../services/searchingMovie.service';
import { Box } from 'Theme/Box';

export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');

  useEffect(() => {
    if (query === null) {
      return;
    }

    const getApiService = async () => {
      try {
        const responseMovie = await getsearchingMovieApi({ query: query });

        setMovies(responseMovie);
      } catch (error) {
        console.log(error);
      }
    };

    getApiService();
  }, [query]);

  return (
    <>
      <SearchBar />
      <ul>
        {movies.map(({ id, title }) => {
          return (
            <Box as="li" key={id} m={2} id={id}>
              <NavLink to={`${id}`}>{title}</NavLink>
            </Box>
          );
        })}
      </ul>
    </>
  );
};
