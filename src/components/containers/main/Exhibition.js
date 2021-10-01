import styled from 'styled-components';
import { useEffect } from 'react';
// components
import MainLayout from 'components/layouts';
// presenters
import ExhibitionCard from 'components/presenters/main/ExhibitionCard';
// slices
import { getExhibitionList } from 'slices/exhibition.thunk';
// hooks
import { useSelector, useDispatch } from 'hooks/common/useStore';
// styles
import { palette } from 'lib/styles';

const Exhibition = () => {
  const dispatch = useDispatch();
  // const exhibitionList = useSelector(state => state.exhibition.exhibitionList);

  useEffect(() => {
    dispatch(getExhibitionList());
  }, [dispatch]);

  const exhibitionList = [
    {
      id: '1',
      name: '늘헴 코러스',
      banner_photo: '/images/crew1.png',
      type: 'Youtube',
    },
    {
      id: '2',
      name: '더블랙',
      banner_photo: '/images/crew2.png',
      type: 'Gallery',
    },
    {
      id: '3',
      name: '소리더하기',
      banner_photo: '/images/crew3.png',
      type: 'Youtube',
    },
    {
      id: '4',
      name: '페이지7',
      banner_photo: '/images/crew4.png',
      type: 'Youtube',
    },
    {
      id: '5',
      name: '율',
      banner_photo: '/images/crew5.png',
      type: 'Gallery',
    },
    {
      id: '6',
      name: '인터페이스',
      banner_photo: '/images/crew6.png',
      type: 'Gallery',
    },
    {
      id: '7',
      name: '늘헴 코러스',
      banner_photo: '/images/crew1.png',
      type: 'Youtube',
    },
    {
      id: '8',
      name: '늘헴 코러스',
      banner_photo: '/images/crew2.png',
      type: 'Youtube',
    },
    {
      id: '9',
      name: '늘헴 코러스',
      banner_photo: '/images/crew3.png',
      type: 'Youtube',
    },
    {
      id: '10',
      name: '늘헴 코러스',
      banner_photo: '/images/crew4.png',
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
        {exhibitionList.map((exhibition, index) => (
          <ExhibitionCard exhibition={exhibition} key={index} />
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
