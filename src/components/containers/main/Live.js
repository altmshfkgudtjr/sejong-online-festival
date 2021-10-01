import styled from 'styled-components';
import { useEffect } from 'react';
// components
import MainLayout from 'components/layouts';
// slices
import { getLive } from 'slices/main.thunk';
// hooks
import { useSelector, useDispatch } from 'hooks/common/useStore';
// styles
import { palette } from 'lib/styles';

const Live = () => {
  const dispatch = useDispatch();
  const liveVideoList = useSelector(state => state.main.liveVideoList);

  const LiveVideoList = liveVideoList.map((live, idx) => (
    <VideoLayout key={idx}>
      <Logo className="noselect" src="/images/logo.png" alt="" />
      <Video />
    </VideoLayout>
  ));

  useEffect(() => {
    dispatch(getLive());
  }, [dispatch]);

  return (
    <Layout>
      <ScrollLayout>
        <Title>실시간 라이브</Title>
        {LiveVideoList}
      </ScrollLayout>
    </Layout>
  );
};

const Layout = styled(MainLayout)`
  position: relative;
  max-width: 100%;
  margin: 200px auto 140px auto;
  overflow: hidden;
`;

const ScrollLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  min-height: 380px;
  flex-wrap: nowrap;
  padding: 0 calc((100% - 1080px) / 2) 0 calc((100% - 1080px) / 2 - 20px);
  overflow-x: auto;
  overflow-y: hidden;

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none;
    width: 0;
    background-color: transparent;
  }
`;

const Title = styled.h1`
  position: relative;
  width: 64px;
  font-size: 48px;
  color: ${palette.white};
  transform: rotate(-90deg) translateX(-132px);
  transform-origin: top left;
  white-space: nowrap;
`;

const VideoLayout = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40vw;
  min-width: 640px;
  max-width: 840px;
  height: 0;
  margin-left: 48px;
  cursor: pointer;
`;

const Video = styled.div`
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;
  background-color: ${palette.background.bg2};
`;

const Logo = styled.img`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  width: 120px;
`;

export default Live;
