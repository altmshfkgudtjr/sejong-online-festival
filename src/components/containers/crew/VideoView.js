import styled from 'styled-components';

const VideoView = ({ link }) => {
  return (
    <Content>
      <iframe
        width="840"
        height="540"
        src="https://www.youtube.com/embed/bouLTLdSTcI"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </Content>
  );
};

const Content = styled.div`
  display: flex;
  align-items: center;
  margin-top: 140px;

  & > iframe {
    margin: auto;
  }
`;

export default VideoView;
