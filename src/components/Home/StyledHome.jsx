import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(NavLink)`
  margin-left: ${p => p.theme.space[3]}px;

  font-size: ${p => p.theme.fontSizes[4]}px;
  font-weight: ${p => p.theme.fontWeights.bold};

  &.active {
    padding: 5px;
    color: ${p => p.theme.colors.background};
    background-color: ${p => p.theme.colors.active};
    border-radius: ${p => p.theme.space[2]}px;
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: ${p => p.theme.colors.hover};
  }
`;
