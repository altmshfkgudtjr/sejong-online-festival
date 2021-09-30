import React from 'react';
import styled from 'styled-components';
import { palette } from 'lib/styles';

const Text = styled.p`
  font-size: 14px;
  color: ${palette.white};
  margin-top: 14px;
`;
function SubText() {
  return <Text>신분 확인 용도 외에는 절대 정보를 저장 및 활용하지 않습니다.</Text>;
}

export default SubText;
