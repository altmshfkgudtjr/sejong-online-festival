import { palette } from 'lib/styles';
import styled from 'styled-components';

const Apply = () => {
  return (
    <Layout>
      <Message>설정을 끝마친 뒤에 우측 적용하기 버튼을 눌러주세요.</Message>
      <Button>적용하기</Button>
    </Layout>
  );
};

const Layout = styled.div`
  width: 100%;
  height: 38px;
  margin: 40px 0;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Message = styled.p`
  font-size: 16px;
  color: ${palette.white};
`;

const Button = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  width: 120px;
  height: 38px;
  border-radius: 38px;
  color: ${palette.white};
  font-size: 16px;
  border: 1px solid ${palette.secondary_red};
  box-shadow: 0 2px 20px rgba(226, 116, 146, 0.6);
`;

export default Apply;
