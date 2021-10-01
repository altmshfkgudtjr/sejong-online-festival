import styled from 'styled-components';
import Logo from 'components/layouts/Logo';
// presenters
import Inputs from 'components/presenters/login/Inputs';
import Period from 'components/presenters/login/Period';
import LoginBtn from 'components/presenters/login/LoginBtn';

const Background = styled.div`
  position: relative;
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

const Login = () => {
  return (
    <Background>
      <Container>
        <Period />
        <Logo />
        <Inputs id="접근 아이디" pw="접근 암호" />
        <LoginBtn text="참여하기" color="blue" />
      </Container>
    </Background>
  );
};

export default Login;
