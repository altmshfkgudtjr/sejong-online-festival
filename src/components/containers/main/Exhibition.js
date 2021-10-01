import styled from 'styled-components';
import { useEffect } from 'react';
// components
import MainLayout from 'components/layouts';
// slices
// import { getCrew } from 'slices/main.thunk';
// hooks
import { useSelector, useDispatch } from 'hooks/common/useStore';
// styles
import { palette } from 'lib/styles';

const Exhibition = () => {
  // const dispatch = useDispatch();
  // const crewList = useSelector(state => state.main.crewList);

  // useEffect(() => {
  //   dispatch(getCrew());
  // }, [dispatch]);

  return (
    <Layout>
      <Title>작품전시 및 동아리</Title>
      <SearchLayout>
        <Input placeholder="동아리명" />
        <SearchIcon src="/images/ionic-ios-search.png" />
      </SearchLayout>
    </Layout>
  );
};

const Layout = styled(MainLayout)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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

export default Exhibition;
