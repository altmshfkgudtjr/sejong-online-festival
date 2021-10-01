import styled from 'styled-components';
import { useState, useEffect, useRef } from 'react';
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
// utils
import { throttle } from 'lib/utils/lazy';

const Exhibition = () => {
  const dispatch = useDispatch();
  const exhibitionList = useSelector(state => state.exhibition.exhibitionList);

  const [filter, setFilter] = useState('');
  const ref = useRef(null);

  const onKeyUp = throttle(e => {
    const value = e.target.value;
    setFilter(value);
  }, 200);

  useEffect(() => {
    dispatch(getExhibitionList());
  }, [dispatch]);

  const ExhibitionList = exhibitionList
    .filter(v => !!~v.name.indexOf(filter))
    .map((exhibition, index) => <ExhibitionCard exhibition={exhibition} key={index} />);

  return (
    <Layout>
      <Title>작품전시 및 동아리</Title>
      <SearchLayout>
        <Input placeholder="동아리명" ref={ref} onKeyUp={onKeyUp} />
        <SearchIcon src={`${process.env.NEXT_PUBLIC_IMAGE_PREFIX}uploads/ionic-ios-search.png`} />
      </SearchLayout>
      <CardLayout>{ExhibitionList}</CardLayout>
    </Layout>
  );
};

const Layout = styled(MainLayout)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 240px;
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
