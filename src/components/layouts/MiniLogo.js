import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const Image = styled.img`
  width: 113px;
  height: 20px;
`;

function MiniLogo() {
  return (
    <Link href="/" passHref>
      <a>
        <Image
          className="noselect"
          src={`${process.env.NEXT_PUBLIC_IMAGE_PREFIX}/uploads/logo.png`}
          alt=""
        />
      </a>
    </Link>
  );
}

export default MiniLogo;
