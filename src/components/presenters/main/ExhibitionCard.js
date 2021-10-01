import styled from 'styled-components';
import Link from 'next/link';
import { palette } from 'lib/styles';
// containers
import Chip from 'components/containers/common/Chip';

const ExhibitionCard = ({ exhibition }) => {
  const typeMap = {
    video_youtube: 'Youtube',
    gallery_grid: 'Gallery',
    gallery_normal: 'Gallery',
  };

  return (
    <Link href={`/exhibition/${exhibition.id}`} passHref>
      <Wrapper>
        <Name>{exhibition.name}</Name>
        <Layout>
          <Logo
            className="noselect"
            src={`${process.env.NEXT_PUBLIC_IMAGE_PREFIX}uploads/logo.png`}
            alt=""
          />
          <Image url={exhibition.banner_photo} />
          <ChipLayout>
            <Chip message={typeMap[exhibition.type]} />
          </ChipLayout>
        </Layout>
      </Wrapper>
    </Link>
  );
};

const Wrapper = styled.a`
  position: relative;
`;

const Layout = styled.div`
  position: relative;
  flex: 1 1 auto;
  width: auto;
  min-width: 300px;
  height: 0;
  padding-bottom: 400px;
  margin-bottom: 24px;
  border-radius: 16px;
  background-color: ${palette.background.bg2};

  & ~ & {
    margin-left: 60px;
  }
`;

const Name = styled.div`
  color: ${palette.white};
  margin-bottom: 8px;
  text-align: center;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  background-image: ${({ url }) => `url(${url}), transparent`};
`;

const ChipLayout = styled.div`
  position: absolute;
  width: fit-content;
  bottom: -24px;
  left: 0;
  right: 0;
  margin: auto;
  cursor: pointer;
`;
const Logo = styled.img`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  height: 20px;
`;

export default ExhibitionCard;
