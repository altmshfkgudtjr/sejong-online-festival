import styled from 'styled-components';
// styles
import { palette } from 'lib/styles';

/**
 * @example
 * <Emphasis>
 *   일반구문
 *   <br />
 *   <strong>강조구문</strong>
 * </Emphasis>
 */
const Emphasis = ({ children }) => {
  return <Message>{children}</Message>;
};

const Message = styled.div`
  text-align: center;
  color: ${palette.font.secondary};
  font-size: 36px;
  font-weight: bold;
  line-height: 60px;

  & > strong {
    color: ${palette.white};
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
  }
`;

export default Emphasis;
