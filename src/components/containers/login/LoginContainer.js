import styled from 'styled-components';
import { useRef } from 'react';
import Logo from 'components/layouts/Logo';
// components
import Period from 'components/presenters/login/Period';
import SubText from 'components/presenters/login/SubText';
import LoginBtn from 'components/presenters/login/LoginBtn';
// slices
import { signin } from 'slices/user.thunk';
// hooks
import { useDispatch } from 'hooks/common/useStore';
// styles
import { palette } from 'lib/styles';

function LoginContainer() {
  const dispatch = useDispatch();

  const idRef = useRef(null);
  const pwRef = useRef(null);

  const onLogin = () => {
    dispatch(signin({ id: idRef.current.value, pw: pwRef.current.value }));
  };

  return (
    <Background>
      <Container>
        <Period />
        <Logo />
        <Layout>
          <Input type="text" placeholder="학번" ref={idRef} />
          <Input type="password" placeholder="비밀번호" ref={pwRef} />
        </Layout>
        <SubText />
        <LoginBtn text="로그인" color="red" onClick={onLogin} />
      </Container>
    </Background>
  );
}

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

const Layout = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  width: 400px;
  height: 58px;
  border-radius: 12px;
  background: ${palette.background.bg2};
  color: #969696;
  font-size: 16px;
  padding: 0 32px;
  outline: none;
  border: none;
  & + & {
    margin-top: 16px;
  }
`;

export default LoginContainer;
