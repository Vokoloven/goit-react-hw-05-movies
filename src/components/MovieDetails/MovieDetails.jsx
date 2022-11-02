import { useState, useEffect } from 'react';
import { Outlet, useParams, useNavigate } from 'react-router-dom';
import { getMovieApi } from '..//..//services/movie.service';
import { Box } from 'Theme/Box';
import {
  StyledList,
  StyledParagraph,
  TitleH2,
  TitleH3,
  StyledLink,
  StyledButton,
  StyledSpan,
} from './StyledMovieDetails';
import { FaArrowAltCircleLeft } from 'react-icons/fa';

export const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const { moviesId } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    const getApiService = async () => {
      try {
        const response = await getMovieApi(moviesId);

        if (response) {
          setMovie(response);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getApiService();
  }, [moviesId]);

  const { poster_path, title, vote_average, overview, genres } = movie;

  return (
    <>
      <StyledButton type="button" onClick={() => navigate(-1)}>
        <FaArrowAltCircleLeft color="#fff" size="20px" />
        <StyledSpan>Go back</StyledSpan>
      </StyledButton>

      <Box mt={1} display="flex">
        {poster_path && (
          <img
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt={title}
            width="350px"
          />
        )}
        <Box ml={4}>
          <TitleH2>{title}</TitleH2>
          <StyledParagraph>
            User score: {Math.round(vote_average) * 10}%
          </StyledParagraph>
          <TitleH3>Overview</TitleH3>
          <StyledParagraph>{overview}</StyledParagraph>
          <TitleH3>Genres</TitleH3>
          <StyledList>
            {genres && genres.map(({ name, id }) => <li key={id}>{name}</li>)}
          </StyledList>
        </Box>
      </Box>
      <Box
        borderTop="2px solid #7b7b7b"
        borderBottom="2px solid #7b7b7b"
        mt={2}
      >
        <StyledParagraph>Additional information:</StyledParagraph>
        <ul>
          <li>
            <StyledLink to="cast">Cast</StyledLink>
          </li>
          <li>
            <StyledLink to="reviews">Reviews</StyledLink>
          </li>
        </ul>
      </Box>
      <Outlet />
    </>
  );
};
