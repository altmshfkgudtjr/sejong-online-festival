import { useState } from 'react';
import styled from 'styled-components';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';
import { palette } from 'lib/styles';

export const Demo = () => {
  const [image, setImage] = useState('');
  const [cropData, setCropData] = useState('#');
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
      <div style={{ width: '100%' }}>
        <input type="file" onChange={onChange} />
        <br />
        <br />
        <Cropper
          style={{ height: 400, width: '100%' }}
          // zoomTo={0.5}
          // responsive={true}
          aspectRatio={3 / 4}
          preview=".img-preview"
          src={image}
          viewMode={1}
          zoomable={false}
          // minCropBoxHeight={10}
          // minCropBoxWidth={10}
          // autoCropArea={1}
          background={false}
          onInitialized={instance => {
            setCropper(instance);
          }}
          guides={true}
        />
      </div>
      <div>
        <div className="box">
          <h1>Preview</h1>
        </div>
        <div className="img-preview">
          <h1>
            <span>Crop</span>
            <button style={{ float: 'right' }} onClick={getCropData}>
              Crop Image
            </button>
          </h1>
          <img style={{ width: '100%' }} src={cropData} alt="cropped" />
        </div>
      </div>
      <br style={{ clear: 'both' }} />
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

export default Demo;
