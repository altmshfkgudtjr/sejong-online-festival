import styled from 'styled-components';

// hooks
import useModal from 'hooks/common/useModal';

const GridView = () => {
  const { initModal } = useModal();
  const onClickContent = content => initModal({ name: 'Preview', args: { src: content } });

  const contents = [
    '/images/mainLeft.png',
    '/images/mainRight.png',
    '/images/logo.png',
    '/images/mainLeft.png',
  ];

  return (
    <Container>
      {contents.map((content, index) => (
        <Content src={content} onClick={onClickContent(content)} key={index} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
  margin-top: 120px;
`;

const Content = styled.img`
  border-radius: 8px;
  cursor: pointer;
  width: 338px;
  height: 338px;
`;

export default GridView;
