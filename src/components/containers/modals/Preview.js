import styled from 'styled-components';

const PreviewModal = ({ args }) => {
  const { src } = args;
  return (
    <Layout>
      <Img src={src} />
    </Layout>
  );
};

const Layout = styled.div`
  width: 800px;
  height: 800px;
  max-width: 100%;
  max-height: 100%;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

export default PreviewModal;
