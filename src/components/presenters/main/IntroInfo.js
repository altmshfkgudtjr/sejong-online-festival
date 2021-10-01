import styled from 'styled-components';
// components
import Logo from 'components/layouts/Logo';
import Period from 'components/presenters/login/Period';
import Btns from 'components/presenters/main/top/Btns';
// styles
import { palette } from 'lib/styles';

const IntroInfo = () => {
  return (
    <TopContainer>
      <Period />
      <Logo />

      <Title>
        <SubTitle interval="6">세종대학교</SubTitle>
        <SubTitle interval="40">대동제</SubTitle>
        <SubTitle interval="32">2021</SubTitle>
      </Title>

      <Btns />
    </TopContainer>
  );
};

const TopContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 40px;
`;

const SubTitle = styled.p`
  color: ${palette.white};
  font-size: 32px;
  letter-spacing: ${props => `${props.interval}px`};
  & + & {
    margin-top: 6px;
  }
`;

export default IntroInfo;
