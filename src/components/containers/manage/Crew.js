import { useState } from 'react';
import styled from 'styled-components';
import { palette } from 'lib/styles';
import Demo from 'components/presenters/common/Cropper';
import GalleryType from 'components/presenters/manage/GalleryType';

const Crew = () => {
  const [selectState, setSelectState] = useState('youtube');
  const [typeState, setTypeState] = useState('gallery_normal');

  const onChangeSelect = e => {
    const { value } = e.target;
    if (value === 'youtube') {
      setSelectState('youtube');
    } else {
      setSelectState('gallery');
    }
  };

  const onChangeType = value => setTypeState(value);

  return (
    <Layout>
      <Title>전시회</Title>
      <Input placeholder="전시회명" />
      <Title>썸네일</Title>
      <Description>권장 이미지는 3:4 비율 300x400(px) 과 같습니다.</Description>
      <Demo />
      <Title>템플릿</Title>
      <Select onChange={onChangeSelect}>
        <option value="youtube">YOUTUBE VIDEO</option>
        <option value="gallery">GALLERY</option>
      </Select>
      {selectState === 'youtube' && <Input placeholder="YOUTUBE 링크 입력" />}
      {selectState === 'gallery' && (
        <GalleryType typeState={typeState} onChangeType={onChangeType} />
      )}
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
  color: #969696;
`;

const Description = styled.p`
  font-size: 16px;
  color: ${palette.font.secondary};
  margin: 16px 0;
`;

export default Crew;
