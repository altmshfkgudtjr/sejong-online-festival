import styled from 'styled-components';
import { palette } from 'lib/styles';

const Inputs = ({ id, pw }) => {
  return (
    <Layout>
      <Input type="text" placeholder={id} />
      <Input type="password" placeholder={pw} />
    </Layout>
  );
};

const Layout = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  width: 400px;
  height: 58px;
  border-radius: 12px;
  background: ${palette.background.bg2};
  color: #969696;
  font-size: 16px;
  padding: 0 32px;
  outline: none;
  border: none;
  & + & {
    margin-top: 16px;
  }
`;

export default Inputs;
