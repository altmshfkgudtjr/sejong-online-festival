import React from 'react';
import styled from 'styled-components';
import { palette } from 'lib/styles';

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 40px;
`;

const P = styled.p`
  color: ${palette.white};
  font-size: 32px;
  letter-spacing: ${props => `${props.interval}px`};
  & + & {
    margin-top: 6px;
  }
`;

function Title() {
  return (
    <Layout>
      <P interval="6">세종대학교</P>
      <P interval="40">대동제</P>
      <P interval="32">2021</P>
    </Layout>
  );
}

export default Title;
