import styled from 'styled-components';
// components
import MainLayout from 'components/layouts';
// styles
import { palette } from 'lib/styles';

const Live = () => {
  return (
    <Layout>
      <Title>실시간 라이브</Title>
      <ScrollLayout>
        <Video></Video>
      </ScrollLayout>
    </Layout>
  );
};

const Layout = styled(MainLayout)`
  max-width: 100%;
  min-height: 380px;
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

const Title = styled.h1`
  font-size: 64px;
  color: ${palette.white};
  transform: rotate(90deg);
`;

const Video = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32vw;
  max-width: 840px;
  height: 0;
  padding-bottom: 0.5625%;
  background-color: ${palette.background.bg2};
`;

export default Live;
