import { useParams } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { getReviewsApi } from '../../services/reviews.service';
import { StyledParagraph, TitleH3 } from './StyledReviews';
import { Box } from 'Theme/Box';

export const Reviews = () => {
  const { moviesId } = useParams();
  const [reviews, setReviews] = useState([]);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
    }
    const getApiService = async () => {
      try {
        const responseReviews = await getReviewsApi(moviesId);
        setReviews(responseReviews);
      } catch (error) {
        console.log(error);
      }
    };

    getApiService();
  }, [moviesId]);

  if (reviews.length !== 0) {
    return (
      <Box m={4}>
        {reviews.map(({ author, content, id }) => {
          return (
            <Box key={id}>
              <TitleH3>{author}</TitleH3>
              <StyledParagraph>{content}</StyledParagraph>
            </Box>
          );
        })}
      </Box>
    );
  } else {
    return (
      <StyledParagraph>
        We don't have any reviews for this movie
      </StyledParagraph>
    );
  }
};
