import styled from 'styled-components';
import { palette } from 'lib/styles';

const Period = () => {
  return <Term>October 19-22</Term>;
};

const Term = styled.h2`
  font-size: 18px;
  color: ${palette.white};
`;

export default Period;
