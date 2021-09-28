import React from 'react';
import styled from 'styled-components';
import { palette } from 'lib/styles';

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

const Date = styled.h2`
  font-size: 18px;
  color: ${palette.white};
`;

const Logo = styled.img`
  width: 294px;
  height: 53px;
  margin: 40px 0;
`;

const Input = styled.input`
  width: 400px;
  height: 58px;
  border-radius: 12px;
  background: #222036;
  color: #969696;
  font-size: 16px;
  padding: 0 32px;
  outline: none;
  border: none;
  & + & {
    margin-top: 16px;
  }
`;

const SubText = styled.p`
  font-size: 14px;
  color: ${palette.white};
  margin-top: 14px;
`;

const Button = styled.button`
  width: 120px;
  height: 38px;
  border-radius: 38px;
  border: 1px solid #e27492;
  box-shadow: 0 2px 20px rgba(226, 116, 146, 0.6);
  color: ${palette.white};
  font-size: 16px;
  margin-top: 32px;
`;

function Login() {
  return (
    <Background>
      <Container>
        <Date>October 19-22</Date>
        <Logo src="/images/logo.png" alt="" />
        <Input type="text" placeholder="학번" />
        <Input type="password" placeholder="비밀번호" />
        <SubText>신분 확인 용도 외에는 절대 정보를 저장 및 활용하지 않습니다.</SubText>
        <Button>로그인</Button>
      </Container>
    </Background>
  );
}

export default Login;
