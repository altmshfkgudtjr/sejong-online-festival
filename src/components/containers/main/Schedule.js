import styled from 'styled-components';
import { useEffect } from 'react';
// components
import MainLayout from 'components/layouts';
import ScheduleTitle from 'components/presenters/main/schedule/Title';
import ScheduleItem from 'components/presenters/main/schedule/Item';
// slices
import { getSchedule } from 'slices/main.thunk';
// hooks
import { useSelector, useDispatch } from 'hooks/common/useStore';
// styles
import { palette } from 'lib/styles';

const Schedule = () => {
  const dispatch = useDispatch();
  const scheduleList = useSelector(state => state.main.scheduleList);

  const ScheduleList = scheduleList.map((schedule, s_idx) => {
    const Items = schedule.events.map((event, e_idx) => (
      <ScheduleItem
        key={e_idx}
        name={event.contents}
        place={event.place_info}
        startTime={event.start_time}
        endTime={event.end_time}
      />
    ));

    return (
      <Box key={s_idx}>
        <ScheduleTitle message={schedule.day_title} />
        {Items}
      </Box>
    );
  });

  useEffect(() => {
    dispatch(getSchedule());
  }, [dispatch]);

  return <Layout>{ScheduleList}</Layout>;
};

const Layout = styled(MainLayout)`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin: 140px auto;
`;

const Box = styled.ul`
  &:nth-of-type(n + 1) {
    & > h2 {
      color: ${palette.secondary_blue};
    }
  }

  &:nth-of-type(n + 2) {
    & > h2 {
      color: ${palette.secondary_pink};
    }
  }

  &:nth-of-type(n + 3) {
    & > h2 {
      color: ${palette.secondary_purple};
    }
  }

  &:nth-of-type(n + 4) {
    & > h2 {
      color: ${palette.secondary_red};
    }
  }
`;

export default Schedule;
