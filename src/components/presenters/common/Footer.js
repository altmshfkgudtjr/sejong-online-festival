import styled from 'styled-components';
import { palette } from 'lib/styles';
import MainLayout from 'components/layouts';

const Footer = () => {
  return (
    <Layout>
      <MainLayout>
        <Title>문의하기</Title>
        <SubTitle>해당 홈페이지에 대한 버그 문의</SubTitle>
        <Description>altmgudtjr@naver.com 으로 문의주시면 감사하겠습니다.</Description>
        <SubTitle>세종대학교 축제에 대한 문의</SubTitle>
        <Description>seon@sejong.ac.kr 으로 문의주시면 감사하겠습니다.</Description>
        <Copyright>Copyright. 2021. NB, All Rights Reserved.</Copyright>
      </MainLayout>
    </Layout>
  );
};

const Layout = styled.footer`
  width: 100%;
  height: 450px;
  padding-top: 60px;
  background: ${palette.background.bg2};
`;

const Title = styled.h2`
  font-size: 36px;
  color: ${palette.white};
`;

const SubTitle = styled.h3`
  font-size: 18px;
  line-height: 36px;
  color: ${palette.white};
  margin-top: 30px;
`;

const Description = styled.p`
  color: ${palette.font.secondary};
`;

const Copyright = styled.p`
  color: ${palette.white};
  font-size: 14px;
  margin-top: 60px;
  text-align: end;
`;

export default Footer;
