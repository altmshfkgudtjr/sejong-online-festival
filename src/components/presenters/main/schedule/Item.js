import styled from 'styled-components';
// styles
import { palette } from 'lib/styles';
// utils
import { onFormatTime } from 'lib/utils/time';

const ScheduleItem = ({ name, place, startTime, endTime }) => {
  const start = `${onFormatTime(startTime)}`;
  const end = `${onFormatTime(endTime)}`;

  return (
    <Layout>
      <Message>
        {start} - {end}
      </Message>
      <Message>{place}</Message>
      <Message>{name}</Message>
    </Layout>
  );
};

const Layout = styled.li`
  display: block;
  margin-top: 32px;
`;

const Message = styled.p`
  line-height: 24px;
  color: ${palette.white};
`;

export default ScheduleItem;
