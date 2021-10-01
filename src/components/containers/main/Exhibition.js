import styled from 'styled-components';
import { useEffect } from 'react';
// components
import MainLayout from 'components/layouts';
// presenters
import CrewCard from 'components/presenters/main/CrewCard';
// slices
// import { getCrew } from 'slices/exhibition.thunk';
// hooks
import { useSelector, useDispatch } from 'hooks/common/useStore';
// styles
import { palette } from 'lib/styles';

const Exhibition = () => {
  // const dispatch = useDispatch();
  // const crewList = useSelector(state => state.exhibition.crewList);

  // useEffect(() => {
  //   dispatch(getCrew());
  // }, [dispatch]);

  const crewList = [
    {
      name: '늘헴 코러스',
      url: '/images/crew1.png',
      object_id: '1',
      type: 'Youtube',
    },
    {
      name: '더블랙',
      url: '/images/crew2.png',
      object_id: '2',
      type: 'Gallery',
    },
    {
      name: '소리더하기',
      url: '/images/crew3.png',
      object_id: '3',
      type: 'Youtube',
    },
    {
      name: '페이지7',
      url: '/images/crew4.png',
      object_id: '4',
      type: 'Youtube',
    },
    {
      name: '율',
      url: '/images/crew5.png',
      object_id: '5',
      type: 'Gallery',
    },
    {
      name: '인터페이스',
      url: '/images/crew6.png',
      object_id: '6',
      type: 'Gallery',
    },
    {
      name: '늘헴 코러스',
      url: '/images/crew1.png',
      object_id: '7',
      type: 'Youtube',
    },
    {
      name: '늘헴 코러스',
      url: '/images/crew2.png',
      object_id: '8',
      type: 'Youtube',
    },
    {
      name: '늘헴 코러스',
      url: '/images/crew3.png',
      object_id: '9',
      type: 'Youtube',
    },
    {
      name: '늘헴 코러스',
      url: '/images/crew4.png',
      object_id: '10',
      type: 'Youtube',
    },
  ];

  return (
    <Layout>
      <Title>작품전시 및 동아리</Title>
      <SearchLayout>
        <Input placeholder="동아리명" />
        <SearchIcon src="/images/ionic-ios-search.png" />
      </SearchLayout>
      <CardLayout>
        {crewList.map((crew, index) => (
          <CrewCard crew={crew} key={index} />
        ))}
      </CardLayout>
    </Layout>
  );
};

const Layout = styled(MainLayout)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 124px;
`;

const Title = styled.h2`
  font-size: 36px;
  color: ${palette.white};
  margin: 64px 0;
`;

const SearchLayout = styled.div`
  position: relative;
  width: 600px;
  height: 58px;
  padding-left: 32px;
  margin-bottom: 64px;
  background: ${palette.background.bg2};
  border-radius: 8px;
  display: flex;
`;

const Input = styled.input`
  color: #969696;
  width: 85%;
  background: none;
  border: none;
  outline: none;
`;

const SearchIcon = styled.img`
  position: absolute;
  right: 32px;
  top: 16px;
`;

const CardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 90px 77px;
`;

export default Exhibition;
