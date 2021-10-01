import { useState } from 'react';
import styled from 'styled-components';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';
import { palette } from 'lib/styles';

export const ImageCropper = ({ cropData, setCropData }) => {
  const [image, setImage] = useState('');
  // const [cropData, setCropData] = useState('');
  const [cropper, setCropper] = useState();

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
      setImage(reader.result);
    };
    reader.readAsDataURL(files[0]);
  };

  const getCropData = () => {
    if (typeof cropper !== 'undefined') {
      setCropData(cropper.getCroppedCanvas().toDataURL());
    }
  };

  return (
    <Layout>
      {!cropData && (
        <div style={{ width: '100%' }}>
          <input type="file" onChange={onChange} />
          <br />
          <br />
          <Cropper
            style={{ height: 400, width: '100%' }}
            aspectRatio={3 / 4}
            preview=".img-preview"
            src={image}
            viewMode={1}
            zoomable={false}
            background={false}
            onInitialized={instance => {
              setCropper(instance);
            }}
            guides={true}
          />
        </div>
      )}
      {image && !cropData && (
        <div>
          <div className="box">
            <h1>Preview</h1>
          </div>
          <div className="img-preview">
            <h1>
              <span>Crop</span>
            </h1>
          </div>
          <CropBtn onClick={getCropData}>이미지 자르기</CropBtn>
        </div>
      )}
      {cropData && (
        <>
          <CroppedImg src={cropData} alt="cropped" />
        </>
      )}
    </Layout>
  );
};

const Layout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .box {
    display: inline-block;
    padding: 10px;
    box-sizing: border-box;
    width: 100%;
  }
  .img-preview {
    overflow: hidden;
    width: 300px;
    height: 400px;
    border-radius: 8px;
  }

  .cropper-point {
    background: ${palette.secondary_blue};
  }
  .cropper-line {
    background: ${palette.secondary_blue};
  }
`;

const CropBtn = styled.button`
  width: 300px;
  height: 58px;
  border-radius: 8px;
  margin: 16px 0 40px;
  color: ${palette.white};
  background: ${palette.background.bg2};
`;

const CroppedImg = styled.img`
  width: 300px;
  height: 400px;
  border-radius: 8px;
  margin-bottom: 36px;
`;

export default ImageCropper;
