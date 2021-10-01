import styled from 'styled-components';
// styles
import { palette } from 'lib/styles';

const ScheduleItem = ({ name, place, startTime, endTime }) => {
  const onFormatTime = num => (num < 10 ? `0${num}` : `${num}`);

  const start = `${onFormatTime(startTime.getHours())}:${onFormatTime(startTime.getMinutes())}`;
  const end = `${onFormatTime(endTime.getHours())}:${onFormatTime(endTime.getMinutes())}`;

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
