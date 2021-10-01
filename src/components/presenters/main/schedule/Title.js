import styled from 'styled-components';
// stlyles
import { palette } from 'lib/styles';

const ScheduleTitle = ({ message }) => {
  return <Message>{message}</Message>;
};

const Message = styled.h2`
  font-size: 32px;
  font-weight: medium;
  color: ${palette.white};
`;

export default ScheduleTitle;
