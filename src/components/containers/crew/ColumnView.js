import styled from 'styled-components';

const ColumnView = () => {
  const contents = [
    `${process.env.NEXT_PUBLIC_IMAGE_PREFIX}uploads/mainLeft.png`,
    `${process.env.NEXT_PUBLIC_IMAGE_PREFIX}uploads/mainRight.png`,
    `${process.env.NEXT_PUBLIC_IMAGE_PREFIX}uploads/logo.png`,
    `${process.env.NEXT_PUBLIC_IMAGE_PREFIX}uploads/mainLeft.png`,
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
