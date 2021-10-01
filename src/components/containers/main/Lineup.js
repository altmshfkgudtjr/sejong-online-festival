import styled from 'styled-components';
import { useEffect } from 'react';
// components
import MainLayout from 'components/layouts';
import Emphahsis from 'components/presenters/common/Emphasis';
import MemberCard from 'components/presenters/main/MemberCard';
// slices
import { getLineup } from 'slices/main.thunk';
// hooks
import { useSelector, useDispatch } from 'hooks/common/useStore';

const Lineup = () => {
  const dispatch = useDispatch();
  const lineupList = useSelector(state => state.main.lineupList);

  const MemberCardList = lineupList.map((member, idx) => (
    <MemberCard
      key={idx}
      name={member.name}
      photo={member.banner_photos}
      time={member.datetime_info}
      openTime={member.open_time}
      url={member.youtube_link}
    />
  ));

  useEffect(() => {
    dispatch(getLineup());
  }, [dispatch]);

  return (
    <Layout>
      <Emphahsis>
        세종대생과 함께 하는 축제
        <br />
        <strong>라인업을 소개합니다.</strong>
      </Emphahsis>

      <ScrollLayout>{MemberCardList}</ScrollLayout>
    </Layout>
  );
};

const Layout = styled(MainLayout)`
  max-width: 100%;
  margin: 200px auto 140px auto;
  overflow: hidden;
`;

const ScrollLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;
  padding: 0 calc((100% - 1080px) / 2);
  margin-top: 124px;
  overflow-x: auto;

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none;
    width: 0;
    background-color: transparent;
  }
`;

export default Lineup;
