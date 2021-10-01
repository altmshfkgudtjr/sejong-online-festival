import styled from 'styled-components';

const CrewCard = () => {
  return (
    <Wrapper>
      <CrewName>{time}</CrewName>
      <Layout>
        <ChipLayout onClick={onClick}>
          <Image url={photo} />
          <Chip message={message}>Gallery</Chip>
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
  height: 0;
  padding-bottom: 400px;
  margin-bottom: 24px;
  border-radius: 16px;
  background-color: ${palette.background.bg2};

  & ~ & {
    margin-left: 60px;
  }
`;

const CrewName = styled.div`
  color: ${palette.white};
  margin-bottom: 8px;
  text-align: center;
`;

const Image = styled.div`
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
  cursor: ${({ isOpen }) => (isOpen ? 'cursor' : 'default')};
`;

export default CrewCard;
