import { useState, useEffect } from 'react';
import { getTrendingApi } from '../../services/trending.service';
import { Outlet, NavLink } from 'react-router-dom';
import { Box } from 'Theme/Box';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const parseTrendingApi = async () => {
      try {
        const data = await getTrendingApi();

        setMovies(data);
      } catch (error) {
        console.log(error);
      }
    };

    parseTrendingApi();
  }, []);

  return (
    <>
      <h1>Trending Today</h1>

      <ul>
        {movies.map(({ id, title, name }) => {
          return (
            <Box as="li" key={id} m={2} id={id}>
              <NavLink to={`/movies/${id}`}>
                {title}
                {name}
              </NavLink>
            </Box>
          );
        })}
      </ul>
      <Outlet />
    </>
  );
};

export default Home;
