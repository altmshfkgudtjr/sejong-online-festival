import Logo from 'components/layouts/Logo';
import MiniLogo from 'components/layouts/MiniLogo';
import Date from 'components/presenters/login/Date';
import Menus from 'components/presenters/main/header/Menus';
import Btns from 'components/presenters/main/top/Btns';
import LeftImg from 'components/presenters/main/top/LeftImg';
import RightImg from 'components/presenters/main/top/RightImage';
import Title from 'components/presenters/main/top/Title';
import React from 'react';
import styled from 'styled-components';

const Background = styled.div`
  position: relative;
  background: #0a0511;
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
  overflow-x: hidden;
`;

const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 58px;
`;

const HeaderLayout = styled.div`
  width: 1080px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ScheduleContainer = styled.div``;

function MainContainer() {
  return (
    <Background>
      <TopContainer>
        <Date />
        <Logo />
        <Title />
        <Btns />
        <LeftImg />
        <RightImg />
      </TopContainer>
      <HeaderContainer>
        <HeaderLayout>
          <MiniLogo />
          <Menus />
        </HeaderLayout>
      </HeaderContainer>
      <ScheduleContainer></ScheduleContainer>
    </Background>
  );
}

export default MainContainer;
