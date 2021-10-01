import MainLayout from 'components/layouts';
import styled from 'styled-components';
import { palette } from 'lib/styles';
import Chip from '../common/Chip';

const Tournament = () => {
  const match_logs = [
    {
      match_teams: ['그땐 그랬지', '부릉부릉 일등이다'],
      time: '2021.10.01 WED',
      status: '다시보기',
      link: 'https://www.youtube.com/watch?v=UHcYtEZvLyk',
    },
    {
      match_teams: ['달려가는 아지매', '레전드리 레전드'],
      time: '2021.10.02 THU',
      status: '실시간',
      link: 'https://www.youtube.com/watch?v=0FBwuRnDZH4',
    },
    {
      match_teams: ['동해번쩍서해물과', '옥수수털이범'],
      time: '2021.10.02 THU',
      status: '실시간',
      link: 'https://www.youtube.com/watch?v=daK1OYuSLrI',
    },
    {
      match_teams: ['번개맨', '2종 보통'],
      time: '2021.10.03 FRI',
      status: '진행예정',
      link: '#',
    },
  ];

  return (
    <Layout>
      {match_logs &&
        match_logs.map((match, index) => (
          <MatchLayout key={index}>
            <Chip message={match.match_teams[0]} />
            <VS>VS</VS>
            <Chip message={match.match_teams[1]} />
            <Time>{match.time}</Time>
            <Button status={match.status} href={match.link} target="_blank">
              {match.status}
            </Button>
          </MatchLayout>
        ))}
    </Layout>
  );
};

const Layout = styled(MainLayout)`
  margin-top: 124px;
  margin-bottom: 124px;
`;

const MatchLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 132px;
`;

const VS = styled.span`
  color: ${palette.white};
  font-size: 48px;
  margin: 0 34px;
`;

const Time = styled.span`
  font-size: 16px;
  color: ${palette.font.secondary};
  margin: 0 32px 0 227px;
`;

const Button = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 38px;
  color: ${palette.white};
  border-radius: 38px;
  border: 1px solid
    ${props =>
      props.status === '실시간' ? `${palette.secondary_blue}` : `${palette.secondary_red}`};

  box-shadow: 0 2px 20px
    ${props =>
      props.status === '실시간' ? `rgba(129, 208, 238, 0.6)` : `rgba(226, 116, 146, 0.6)`};
`;

export default Tournament;
