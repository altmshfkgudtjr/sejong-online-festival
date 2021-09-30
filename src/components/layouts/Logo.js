import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
  width: 294px;
  height: 53px;
  margin: 40px 0;
`;

function Logo() {
  return <Image src="/images/logo.png" alt="" />;
}

export default Logo;
