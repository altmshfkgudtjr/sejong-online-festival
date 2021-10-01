import styled from 'styled-components';

const Intro = ({ children }) => {
  return (
    <Background>
      <TopContainer>
        {children}
        <LeftImage>
          <Image src="/images/mainLeft.png" />
        </LeftImage>
        <RightImage>
          <Image src="/images/mainRight.png" />
        </RightImage>
      </TopContainer>
    </Background>
  );
};

const Background = styled.section`
  position: relative;
  overflow: hidden;
`;

const TopContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const ImageLayout = styled.div`
  position: absolute;
  top: 0;
  opacity: 0.2;
  transition: left 0.5s, right 0.5s, opacity 0.1s;
`;

const LeftImage = styled(ImageLayout)`
  left: -40vw;
  clip-path: polygon(0 0, 100% 0, 100% 0, 70% 100%, 0 100%);

  &:hover {
    left: -10vw;
    opacity: 1;
  }
`;

const RightImage = styled(ImageLayout)`
  right: -40vw;
  clip-path: polygon(0 100%, 30% 0, 100% 0, 100% 100%, 100% 100%);

  &:hover {
    right: -10vw;
    opacity: 1;
  }
`;

const Image = styled.img`
  position: relative;
  z-index: 0;
  height: 100vh;
`;

export default Intro;
