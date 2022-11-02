import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledList = styled('ul')`
  display: flex;
  list-style: none;
  gap: ${p => p.theme.space[3]}px;
  padding-left: ${p => p.theme.space[0]}px;
  font-size: ${p => p.theme.fontSizes[3]}px;
`;

export const StyledParagraph = styled('p')`
  font-size: ${p => p.theme.fontSizes[3]}px;
  /* font-weight: ${p => p.theme.fontWeights.bold}; */
  margin: ${p => p.theme.space[0]};
  /* margin-bottom: ${p => p.theme.space[4]}px; */
`;

export const TitleH2 = styled('h2')`
  font-size: ${p => p.theme.fontSizes[5]}px;
`;

export const TitleH3 = styled('h3')`
  font-size: ${p => p.theme.fontSizes[4]}px;
`;

export const StyledLink = styled(NavLink)`
  font-size: ${p => p.theme.fontSizes[3]}px;

  color: ${p => p.theme.colors.active};

  :hover,
  :focus {
    color: ${p => p.theme.colors.hover};
  }
`;

export const StyledButton = styled('button')`
  margin-top: ${p => p.theme.space[2]}px;
  width: ${p => p.theme.sizes[7]}px;
  height: ${p => p.theme.sizes[4]}px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${p => p.theme.colors.active};
  cursor: pointer;
  border: none;
  border-radius: 5px;
`;

export const StyledSpan = styled('span')`
  font-size: ${p => p.theme.fontSizes[2]}px;
  color: ${p => p.theme.colors.background};
`;
