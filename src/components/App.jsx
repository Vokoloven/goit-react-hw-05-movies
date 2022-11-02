import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { Box } from 'Theme/Box';
import { GlobalStyle } from 'Theme/globalStyles';
import { StyledLink } from './Home/StyledHome';
// import {Home} from './Home/Home';
// import { Movies } from './Movies';
// import { MovieDetails } from './MovieDetails/MovieDetails';
// import { Cast } from './Cast';
// import { Reviews } from './Reviews';
// const Home = lazy(() => import('./Home/Home'));

const createAsyncComponent = path => lazy(() => import(`${path}`));

const Home = createAsyncComponent('./Home/Home');
const Movies = createAsyncComponent('./Movies/Movies');
const MovieDetails = createAsyncComponent('./MovieDetails/MovieDetails');
const Cast = createAsyncComponent('./Cast/Cast');
const Reviews = createAsyncComponent('./Reviews/Reviews');

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Box as="nav" pb={3} pt={3} boxShadow="main">
        <StyledLink to="/" end>
          Home
        </StyledLink>
        <StyledLink to="movies">Movies</StyledLink>
      </Box>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="movies" element={<Movies />}></Route>
        <Route path="/movies/:moviesId" element={<MovieDetails />}>
          <Route path="/movies/:moviesId/cast" element={<Cast></Cast>} />
          <Route
            path="/movies/:moviesId/reviews"
            element={<Reviews></Reviews>}
          />
        </Route>
      </Routes>
    </>
  );
};
