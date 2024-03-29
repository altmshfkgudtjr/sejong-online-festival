import styled from 'styled-components';
import Link from 'next/link';
// styles
import { palette } from 'lib/styles';

const EsportsCard = ({ id, name, url }) => {
  return (
    <Link href={`/esports/${id}`} passHref>
      <a>
        <Layout>
          <Card>
            <Image src={url} />
          </Card>
          <Name>{name}</Name>
        </Layout>
      </a>
    </Link>
  );
};

const Layout = styled.div`
  margin-left: 32px;
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
    background-color: ${palette.background.bg2};
    background-color: ${({ url }) => `url(${url})`};
    z-index: -1;
  }
`;

const Image = styled.img`
  width: calc(100% - 4px);
  height: calc(100% - 4px);
  padding: 2px;
`;

const Name = styled.p`
  color: ${palette.white};
  font-size: 20px;
  white-space: nowrap;
  font-weight: bold;
  text-align: center;
  margin-top: 16px;
`;

export default EsportsCard;
