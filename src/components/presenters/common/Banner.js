import styled from 'styled-components';
// styles
import { palette } from 'lib/styles';

// TODO 애니메이션 적용하기
const Banner = ({ message }) => {
  return (
    <Layout>
      <h1>{message}</h1>
    </Layout>
  );
};

const Layout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 200px;

  & > h1 {
    position: relative;
    color: ${palette.white};
    font-size: 36px;
    font-weight: bold;
    text-align: center;
    z-index: 1;
  }

  &::before {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    background: ${palette.primary};
    opacity: 0.4;
    z-index: 0;
  }
`;

export default Banner;
