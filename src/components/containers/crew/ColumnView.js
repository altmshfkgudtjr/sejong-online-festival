import styled from 'styled-components';

const ColumnView = ({ contents }) => {
  return (
    <>
      {contents.map((content, index) => (
        <Content src={`${process.env.NEXT_PUBLIC_IMAGE_PREFIX}/${content}`} key={index} />
      ))}
    </>
  );
};

const Content = styled.img`
  margin-top: 60px;
  width: 100%;
`;

export default ColumnView;
