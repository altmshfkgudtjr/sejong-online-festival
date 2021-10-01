import styled from 'styled-components';
import { useState } from 'react';
import { palette } from 'lib/styles';

const GalleryType = ({ type, setType }) => {
  const [image, setImage] = useState([]);

  const onChange = e => {
    e.preventDefault();
    let files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setImage([...image, reader.result]);
    };
    reader.readAsDataURL(files[0]);
  };

  return (
    <>
      <Layout>
        <TypeLayout typeState={type === 'gallery_normal'} onClick={() => setType('gallery_normal')}>
          <Icon src="/images/bigType.png" />큰 이미지
        </TypeLayout>
        <TypeLayout typeState={type === 'gallery_grid'} onClick={() => setType('gallery_grid')}>
          <Icon src="/images/gridType.png" />
          그리드 이미지
        </TypeLayout>
      </Layout>
      <Title>사진 등록</Title>
      {type === 'gallery_normal' && (
        <>
          <ImagePreviewLayout>
            {image && image.map((img, index) => <ImagePreview src={img} key={index} />)}
          </ImagePreviewLayout>
          <InputLayout>
            <Input type="file" id="inputFile" onChange={onChange} />
            <Description>이 곳을 클릭하여 이미지를 추가해주세요!</Description>
          </InputLayout>
        </>
      )}
      {type === 'gallery_grid' && (
        <ImagePreviewGridLayout>
          {image && image.map((img, index) => <ImagePreviewGrid src={img} key={index} />)}
          <InputGridLayout>
            <Input type="file" id="inputFile" onChange={onChange} />
            <GridDescription>이 곳을 클릭하여 이미지를 추가해주세요!</GridDescription>
          </InputGridLayout>
        </ImagePreviewGridLayout>
      )}
    </>
  );
};

const Layout = styled.div`
  display: flex;
  justify-content: center;
  margin: 16px 0;
`;

const TypeLayout = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: ${palette.white};
  font-size: 14px;
  cursor: pointer;
  background: ${props => (props.typeState ? `${palette.background.bg2}` : `none`)};

  & + & {
    margin-left: 60px;
  }

  &:hover {
    background: ${palette.background.bg2};
  }
`;

const Icon = styled.img`
  margin-bottom: 14px;
`;

const Title = styled.h2`
  font-size: 36px;
  color: ${palette.white};
  margin: 60px 0;
`;

const InputLayout = styled.div`
  position: relative;
  width: 1080px;
  height: 140px;
  background: ${palette.background.bg2};
  border-radius: 8px;
  margin-bottom: 120px;
`;

const Input = styled.input`
  position: relative;
  z-index: 2;
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
  opacity: 0;
  cursor: pointer;
`;

const Description = styled.p`
  width: 100%;
  height: 100%;
  z-index: 1;
  top: 0;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${palette.font.secondary};
  font-size: 18px;
`;

const ImagePreviewLayout = styled.div`
  width: 1080px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 32px;
`;

const ImagePreview = styled.img`
  margin-top: 32px;
`;

const ImagePreviewGridLayout = styled.div`
  width: 1080px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
  margin-bottom: 180px;
`;

const InputGridLayout = styled.div`
  position: relative;
  border-radius: 8px;
  min-height: 338px;
  background: ${palette.background.bg2};
`;

const GridDescription = styled(Description)`
  font-size: 15px;
`;

const ImagePreviewGrid = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  max-height: 338px;
  max-width: 338px;
`;

export default GalleryType;
