import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
  width: 113px;
  height: 20px;
`;

function MiniLogo() {
  return <Image src="/images/logo.png" alt="" />;
}

export default MiniLogo;
