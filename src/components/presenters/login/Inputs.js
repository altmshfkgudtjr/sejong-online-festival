import React from 'react';
import styled from 'styled-components';
import { palette } from 'lib/styles';

const Layout = styled.div`
  display: flex;
  flex-direction: column;
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

function Inputs() {
  return (
    <Layout>
      <Input type="text" placeholder="학번" />
      <Input type="password" placeholder="비밀번호" />
    </Layout>
  );
}

export default Inputs;
