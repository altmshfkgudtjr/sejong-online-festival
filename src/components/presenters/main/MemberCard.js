import styled from 'styled-components';
import { useState, useEffect } from 'react';
// components
import Chip from 'components/containers/common/Chip';
// styles
import { palette } from 'lib/styles';
// utils
import { getDateTime, onFormatTime } from 'lib/utils/time';

const MemberCard = ({ name, photo, time, openTime, url }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const onClick = () => {
    if (isOpen) {
      window.open(url, '_blank').focus();
    }
  };

  useEffect(() => {
    const currentTime = new Date();
    if (currentTime.getTime() >= getDateTime(openTime).getTime()) {
      setIsOpen(true);
      setMessage(name);
    } else {
      setIsOpen(false);
      setMessage(`${onFormatTime(openTime)} 공개`);
    }
  }, [openTime]);

  return (
    <Layout>
      <Time>{time}</Time>
      <ChipLayout isOpen={isOpen} onClick={onClick}>
        {isOpen && <Image url={photo} />}
        <Chip message={message} />
      </ChipLayout>
      <ButtonLayout isOpen={isOpen}>
        <PlayButton />
      </ButtonLayout>
    </Layout>
  );
};

const PlayButton = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
    <path
      d="M35.375,3.375a32,32,0,1,0,32,32A32,32,0,0,0,35.375,3.375Zm12.892,32.6L27.16,48.744a.684.684,0,0,1-1.031-.6V22.606a.682.682,0,0,1,1.031-.6L48.267,34.775A.705.705,0,0,1,48.267,35.975Z"
      transform="translate(-3.375 -3.375)"
      fill="#fff"
      opacity="0.8"
    />
  </svg>
);

const Layout = styled.div`
  flex: 1 1 auto;
  position: relative;
  width: auto;
  min-width: 300px;
  height: 0;
  padding-bottom: 400px;
  margin-bottom: 24px;
  border-radius: 16px;
  background-color: ${palette.background.bg2};
  overflow: hidden;

  & ~ & {
    margin-left: 60px;
  }
`;

const Time = styled.span`
  color: ${palette.white};
  margin-bottom: 8px;
`;

const Image = styled.div`
  width: 100%;
  height: 100%;
  background-image: ${({ url }) => `url(${url}), transparent`};
`;

const ChipLayout = styled.div`
  position: absolute;
  width: fit-content;
  bottom: -24px;
  left: 0;
  right: 0;
  margin: auto;
  cursor: ${({ isOpen }) => (isOpen ? 'cursor' : 'default')};
`;

const ButtonLayout = styled.div`
  display: none;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);

  &:hover {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  }
`;

export default MemberCard;
