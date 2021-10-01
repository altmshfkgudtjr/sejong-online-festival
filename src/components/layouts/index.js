import styled from 'styled-components';
// styles
import { mediaQuery } from 'lib/styles';

const MainLayout = styled.div`
  width: 100%;
  max-width: 1080px;
  padding: 0 16px;
  margin: auto;

  ${mediaQuery.large} {
    padding: 0;
  }
`;

export default MainLayout;
