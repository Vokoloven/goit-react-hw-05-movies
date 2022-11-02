import { useParams } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { getCreditsApi } from '../../services/credits.service';
import { Box } from 'Theme/Box';

const Cast = () => {
  const { moviesId } = useParams();
  const [credits, setCredits] = useState([]);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
    }
    const getApiService = async () => {
      try {
        const responseCredits = await getCreditsApi(moviesId);
        setCredits(responseCredits);
      } catch (error) {
        console.log(error);
      }
    };

    getApiService();
  }, [moviesId]);

  return (
    <>
      <ul>
        {credits.map(
          ({ id, name, profile_path, character }) =>
            profile_path && (
              <Box key={id}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                  alt={name}
                  width="100px"
                />
                <li>{name}</li>
                <p>Character: {character}</p>
              </Box>
            )
        )}
      </ul>
    </>
  );
};

export default Cast;
