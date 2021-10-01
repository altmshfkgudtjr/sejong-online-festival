import styled from 'styled-components';
// styles
import { onlyHover, mediaQuery } from 'lib/styles';

const Intro = ({ children }) => {
  return (
    <Background className="noselect">
      <TopContainer>
        {children}
        <LeftImage>
          <Image src={`${process.env.NEXT_PUBLIC_IMAGE_PREFIX}uploads/mainLeft.png`} />
        </LeftImage>
        <RightImage>
          <Image src={`${process.env.NEXT_PUBLIC_IMAGE_PREFIX}uploads/mainRight.png`} />
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
  clip-path: polygon(0 0, 100% 0, 100% 0, 70% 100%, 0 100%);
  left: -100vw;

  ${onlyHover} {
    &:hover {
      left: -60vw;
      opacity: 1;
    }
  }

  ${mediaQuery.custom(1200)} {
    left: -50vw;

    ${onlyHover} {
      &:hover {
        left: -20vw;
        opacity: 1;
      }
    }
  }

  ${mediaQuery.custom(1600)} {
    left: -40vw;

    ${onlyHover} {
      &:hover {
        left: -10vw;
        opacity: 1;
      }
    }
  }
`;

const RightImage = styled(ImageLayout)`
  clip-path: polygon(0 100%, 30% 0, 100% 0, 100% 100%, 100% 100%);
  right: -100vw;

  ${onlyHover} {
    &:hover {
      right: -60vw;
      opacity: 1;
    }
  }

  ${mediaQuery.custom(1200)} {
    right: -50vw;

    ${onlyHover} {
      &:hover {
        right: -20vw;
        opacity: 1;
      }
    }
  }

  ${mediaQuery.custom(1600)} {
    right: -40vw;

    ${onlyHover} {
      &:hover {
        right: -10vw;
        opacity: 1;
      }
    }
  }
`;

const Image = styled.img`
  position: relative;
  z-index: 0;
  height: 100vh;
`;

export default Intro;
