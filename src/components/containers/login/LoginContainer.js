import React from 'react';
import styled from 'styled-components';
import Period from 'components/presenters/login/Period';
import Inputs from 'components/presenters/login/Inputs';
import Logo from 'components/layouts/Logo';
import SubText from 'components/presenters/login/SubText';
import LoginBtn from 'components/presenters/login/LoginBtn';

const Background = styled.div`
  position: relative;
  background: #0a0511;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function LoginContainer() {
  return (
    <Background>
      <Container>
        <Period />
        <Logo />
        <Inputs />
        <SubText />
        <LoginBtn />
      </Container>
    </Background>
  );
}

export default LoginContainer;
