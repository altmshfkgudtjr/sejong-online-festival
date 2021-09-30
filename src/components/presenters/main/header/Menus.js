import React from 'react';
import styled from 'styled-components';
import { palette } from 'lib/styles';

const Layout = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Menu = styled.li`
  color: ${palette.white};
  font-size: 1rem;
  margin: 14px;
`;

function Menus() {
  return (
    <Layout>
      <Menu>일정</Menu>
      <Menu>LINE-UP</Menu>
      <Menu>E-SPROTS</Menu>
      <Menu>동아리</Menu>
      <Menu>문의</Menu>
    </Layout>
  );
}

export default Menus;
