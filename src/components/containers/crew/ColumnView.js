import styled from 'styled-components';

const ColumnView = () => {
  const contents = [
    '/images/mainLeft.png',
    '/images/mainRight.png',
    '/images/logo.png',
    '/images/mainLeft.png',
  ];

  return (
    <>
      {contents.map((content, index) => (
        <Content src={content} key={index} />
      ))}
    </>
  );
};

const Content = styled.img`
  margin-top: 60px;
  width: 100%;
`;

export default ColumnView;
