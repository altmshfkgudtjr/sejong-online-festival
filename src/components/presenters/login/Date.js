import React from 'react';
import styled from 'styled-components';
import { palette } from 'lib/styles';

const Term = styled.h2`
  font-size: 18px;
  color: ${palette.white};
`;

function Date() {
  return <Term>October 19-22</Term>;
}

export default Date;
