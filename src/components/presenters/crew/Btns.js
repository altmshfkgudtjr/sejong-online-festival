import styled from 'styled-components';
import { palette } from 'lib/styles';
import { copyToClipboard } from 'lib/utils/clipboard';
import useToast from 'hooks/common/useToast';

const Btns = () => {
  const { initToast } = useToast();

  const onClickBtn = () => {
    copyToClipboard(window.location.href);
    createToast();
  };

  const createToast = () =>
    initToast({
      message: '주소가 복사되었습니다.',
    });

  return (
    <Layout>
      <GoBackButton>뒤로가기</GoBackButton>
      <ShareButton onClick={onClickBtn}>공유하기</ShareButton>
    </Layout>
  );
};

const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 120px 0;
`;

const GoBackButton = styled.button`
  width: 120px;
  height: 38px;
  border-radius: 38px;
  border: 1px solid #81d0ee;
  box-shadow: 0 2px 20px rgba(129, 208, 238, 0.6);
  color: ${palette.white};
  font-size: 16px;
`;

const ShareButton = styled(GoBackButton)`
  border: 1px solid #e27492;
  box-shadow: 0 2px 20px rgba(226, 116, 146, 0.6);
  margin-left: 80px;
`;

export default Btns;
