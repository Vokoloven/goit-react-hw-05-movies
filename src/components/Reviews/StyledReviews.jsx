import styled from 'styled-components';

export const StyledParagraph = styled('p')`
  font-size: ${p => p.theme.fontSizes[3]}px;
  /* font-weight: ${p => p.theme.fontWeights.bold}; */
  margin: ${p => p.theme.space[0]};
  /* margin-bottom: ${p => p.theme.space[4]}px; */
`;

export const TitleH3 = styled('h3')`
  font-size: ${p => p.theme.fontSizes[4]}px;
`;
