import styled from 'styled-components';
// components
import LeftImg from 'components/presenters/main/top/LeftImg';
import RightImg from 'components/presenters/main/top/RightImage';

const Intro = ({ children }) => {
  return (
    <Background>
      <LeftImg />
      <RightImg />
    </Background>
  );
};

const Background = styled.div`
  position: relative;
  overflow: hidden;
`;

export default Intro;
