import { useState } from 'react';
import styled from 'styled-components';
import { palette } from 'lib/styles';
import ImageCropper from 'components/presenters/common/Cropper';
import GalleryType from 'components/presenters/manage/GalleryType';

const Exhibition = () => {
  const [type, setType] = useState('video_youtube');
  const [title, setTitle] = useState('');
  const [youtubeLink, setYoutubeLink] = useState('');
  const [cropData, setCropData] = useState('');

  const onChangeSelect = e => {
    const { value } = e.target;
    if (value === 'youtube') {
      setType('video_youtube');
    } else {
      setType('gallery_normal');
    }
  };

  const onChangeTitle = e => {
    const { value } = e.target;
    setTitle(value);
  };

  const onChangeYoutubeLink = e => {
    const { value } = e.target;
    setYoutubeLink(value);
  };

  const onChangeType = value => setType(value);
  const onChangeCropData = data => setCropData(data);

  return (
    <Layout>
      <Title>전시회</Title>
      <Input placeholder="전시회명" onChange={onChangeTitle} />
      <Title>썸네일</Title>
      <Description>권장 이미지는 3:4 비율 300x400(px) 과 같습니다.</Description>
      <Description>이미지를 잘라서 사용해보세요.</Description>
      <ImageCropper cropData={cropData} setCropData={onChangeCropData} />
      <Title>템플릿</Title>
      <Select onChange={onChangeSelect}>
        <option value="youtube">YOUTUBE VIDEO</option>
        <option value="gallery">GALLERY</option>
      </Select>
      {type === 'video_youtube' && (
        <Input placeholder="YOUTUBE 링크 입력" onChange={onChangeYoutubeLink} />
      )}
      {type !== 'video_youtube' && <GalleryType type={type} setType={onChangeType} />}
    </Layout>
  );
};

const Layout = styled.section`
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 24px;
  color: ${palette.white};
`;

const Input = styled.input`
  width: 100%;
  height: 58px;
  border-radius: 8px;
  border: none;
  outline: none;
  background: ${palette.background.bg2};
  padding: 0 32px;
  margin: 16px 0 32px;
  color: #969696;
`;

const Select = styled.select`
  width: 100%;
  height: 58px;
  border-radius: 8px;
  border: none;
  outline: none;
  background: ${palette.background.bg2};
  padding: 0 32px;
  margin: 16px 0;
  color: ${palette.white};
`;

const Description = styled.p`
  font-size: 16px;
  color: ${palette.font.secondary};
  margin: 16px 0;

  & + & {
    margin: 0 0 16px;
  }
`;

export default Exhibition;
