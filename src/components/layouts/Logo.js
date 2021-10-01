import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
  height: 54px;
  margin: 40px 0;
`;

function Logo() {
  return <Image src={`${process.env.NEXT_PUBLIC_IMAGE_PREFIX}/uploads/logo.png`} alt="" />;
}

export default Logo;
