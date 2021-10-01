import styled from 'styled-components';
import { palette } from 'lib/styles';
// containers
import Chip from 'components/containers/common/Chip';

const CrewCard = ({ crew }) => {
  return (
    <Wrapper>
      <Name>{crew.name}</Name>
      <Layout>
        <Image src={crew.url} />
        <ChipLayout>
          <Chip message={crew.type} />
        </ChipLayout>
      </Layout>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
`;

const Layout = styled.div`
  position: relative;
  flex: 1 1 auto;
  width: auto;
  min-width: 300px;
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

export default CrewCard;
