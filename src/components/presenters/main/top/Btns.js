import React from 'react';
import styled from 'styled-components';
import { palette } from 'lib/styles';

const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`;

const EnterButton = styled.button`
  width: 120px;
  height: 38px;
  border-radius: 38px;
  border: 1px solid #81d0ee;
  box-shadow: 0 2px 20px rgba(129, 208, 238, 0.6);
  color: ${palette.white};
  font-size: 16px;
`;

const ShareButton = styled(EnterButton)`
  border: 1px solid #e27492;
  box-shadow: 0 2px 20px rgba(226, 116, 146, 0.6);
  margin-left: 40px;
`;

function Btns() {
  return (
    <Layout>
      <EnterButton>참여하기</EnterButton>
      <ShareButton>공유하기</ShareButton>
    </Layout>
  );
}

export default Btns;
