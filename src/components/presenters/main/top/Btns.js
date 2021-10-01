import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { palette } from 'lib/styles';

const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`;

const Button = styled.button`
  width: 120px;
  height: 38px;
  border-radius: 38px;
  color: ${palette.white};
  font-size: 16px;
  transition: 0.4s ease;

  & ~ & {
    margin-left: 40px;
  }

  &:hover {
    box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  }
`;

const AttendButton = styled(Button)`
  border: 1px solid #81d0ee;
  box-shadow: 0 2px 20px rgba(129, 208, 238, 0.6);
`;

const ShareButton = styled(Button)`
  border: 1px solid #e27492;
  box-shadow: 0 2px 20px rgba(226, 116, 146, 0.6);
`;

function Btns() {
  const onClickStart = () => {
    document.querySelector('html').scrollTop = window.innerHeight;
  };

  return (
    <Layout>
      <AttendButton onClick={onClickStart}>참여하기</AttendButton>
      <ShareButton>공유하기</ShareButton>
    </Layout>
  );
}

export default Btns;
