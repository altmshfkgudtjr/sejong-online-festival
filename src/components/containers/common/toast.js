import styled from 'styled-components';
// lib
import { palette } from 'lib/styles';

/**
 * Toast
 * @param props
 * @param props.title 제목
 * @param props.subTitle 부제목
 *
 * @example
 * <Toast title="제목" subTitle="Toast 내용입니다." />
 */
const Toast = ({ title, subTitle, ...props }) => {
  return (
    <ToastLayout whiteSpace={32} {...props}>
      {title && <Title>{title}</Title>}
      <SubTitle isTitle={!!Title}>{subTitle}</SubTitle>
    </ToastLayout>
  );
};

const ToastLayout = styled.div`
  width: ${({ whiteSpace }) =>
    whiteSpace ? `calc(100vw - (${whiteSpace}px * 2))` : `calc(100vw - (32px * 2))`};
  max-width: 320px;
  padding: 20px 16px;
  margin: auto;
  border-radius: 10px;
  background-color: ${palette.white};
  overflow: hidden;
`;

const Title = styled.h1`
  margin-bottom: 6px;
  font-weight: 500;
  line-height: 24px;
  text-align: center;
`;

const SubTitle = styled.p`
  font-size: ${({ isTitle }) => (isTitle ? '13px' : '14px')};
  line-height: 20px;
  text-align: center;
`;

export default Toast;
