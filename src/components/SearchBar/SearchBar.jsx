import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box } from 'Theme/Box';

export const SearchBar = ({ onSubmit }) => {
  const [value, setValue] = useState('');
  const navigate = useNavigate();

  const handleChange = e => {
    setValue(e.target.value);
  };

  const searchFilmByName = e => {
    e.preventDefault();
    const params = e.target.search.value.toLowerCase();
    if (params === '') {
      return;
    }

    setValue('');
    navigate(`?query=${params}`, { replace: true });
  };

  return (
    <>
      <Box as="form" mt={3} ml={3} className="form" onSubmit={searchFilmByName}>
        <Box
          as="input"
          width="20%"
          height={4}
          fontSize={4}
          name="search"
          type="text"
          value={value}
          onChange={handleChange}
          autoComplete="off"
          autoFocus
          placeholder="Search films by name"
        />
        <Box as="button" type="submit" className="button" width={6} height={5}>
          <span className="button-label">Search</span>
        </Box>
      </Box>
    </>
  );
};
