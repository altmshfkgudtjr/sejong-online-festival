import React from 'react';
import styled from 'styled-components';
import { palette } from 'lib/styles';

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

function LoginBtn() {
  return <Button>로그인</Button>;
}

export default LoginBtn;
