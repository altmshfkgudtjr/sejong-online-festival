import React from 'react';
import styled from 'styled-components';

const Layout = styled.div`
  position: absolute;
  top: 0;
  right: -25%;
  opacity: 0.2;
  transition: all 0.5s;

  /* left top - right top - right bottom - center - left bottom */
  clip-path: polygon(0 100%, 30% 0, 100% 0, 100% 100%, 100% 100%);

  &:hover {
    right: 0;
    opacity: 1;
  }
`;

const Image = styled.img`
  position: relative;
  z-index: 0;
  height: 100vh;
`;

function RightImg() {
  return (
    <Layout>
      <Image src="/images/mainRight.png" />
    </Layout>
  );
}

export default RightImg;
