import styled from 'styled-components';
// styles
import { palette } from 'lib/styles';

const EsportsCard = ({ id, name, url }) => {
  return (
    <Layout>
      <Card url={url} />
      <Name>{name}</Name>
    </Layout>
  );
};

const Layout = styled.div`
  & ~ & {
    margin-left: 32px;
  }
`;

const Card = styled.div`
  position: relative;
  min-width: 330px;
  height: 500px;
  color: ${palette.white};
  font-size: 18px;
  line-height: 45px;
  text-align: center;
  background: ${palette.primary};
  z-index: 0;

  &::before {
    content: '';
    position: absolute;
    left: 2px;
    top: 2px;
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    background-color: ${({ url }) =>
      url ? `url(${url}), ${palette.background.bg2}` : palette.background.bg2};
    z-index: -1;
  }
`;

const Name = styled.p`
  color: ${palette.white};
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-top: 16px;
`;

export default EsportsCard;
