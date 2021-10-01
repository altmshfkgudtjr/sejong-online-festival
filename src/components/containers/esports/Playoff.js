import styled from 'styled-components';
import { palette } from 'lib/styles';
// import Chip from '../common/Chip';

const Playoff = () => {
  const tournaments = {
    0: [
      'https://www.youtube.com/watch?v=zilY4h3waF8',
      ['그땐 그랬지', '부릉부릉 일등이다'],
      'https://www.youtube.com/watch?v=UHcYtEZvLyk',
      ['달려가는 아지매', '레전드리 레전드'],
      null,
      ['동해번쩍서해물과', '옥수수털이범'],
      null,
      ['우리는미개봉중고생', '오이무침'],
    ],
    1: [null, ['번개맨', '2종 보통']],
    2: [],
    3: [],
  };
  return (
    <Layout>
      <Chip top="0px" left="0">
        그땐 그랬지
      </Chip>
      <Chip top="128px" left="0">
        부릉부릉 일등이다
      </Chip>
      <Chip top="256px" left="0" opacity="0.4">
        달려가는 아지매
      </Chip>
      <Chip top="384px" left="0">
        레전드리 레전드
      </Chip>
      <Chip top="512px" left="0">
        동해번쩍서해물과
      </Chip>
      <Chip top="640px" left="0" opacity="0.4">
        옥수수털이범
      </Chip>
      <Chip top="768px" left="0">
        번개맨
      </Chip>
      <Chip top="896px" left="0" opacity="0.4">
        2종 보통
      </Chip>
      <Chip top="64px" left="260px">
        ?
      </Chip>
      <Chip top="320px" left="260px">
        레전드리 레전드
      </Chip>
      <Chip top="576px" left="260px">
        동해번쩍서해물과
      </Chip>
      <Chip top="832px" left="260px" opacity="0.4">
        번개맨
      </Chip>
      <Chip top="192px" left="520px">
        ?
      </Chip>
      <Chip top="704px" left="520px">
        동해번쩍서해물과
      </Chip>
      <Chip top="448px" left="780px">
        ?<Winner>Winner</Winner>
      </Chip>
    </Layout>
  );
};

const Layout = styled.div`
  position: relative;
  width: 980px;
  height: 950px;
  margin: 60px auto 124px;
`;

const Chip = styled.div`
  position: absolute;
  width: 200px;
  height: 48px;
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  opacity: ${({ opacity }) => opacity};
  border-radius: 48px;
  color: ${palette.white};
  font-size: 18px;
  line-height: 45px;
  text-align: center;
  background: ${palette.primary};
  z-index: 0;

  &::before {
    content: '';
    position: absolute;
    left: 2px;
    top: 2px;
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    border-radius: 48px;
    background-color: ${palette.background.bg2};
    z-index: -1;
  }
`;

const Winner = styled.div`
  position: absolute;
  top: -36px;
  left: 70px;
  color: #ffff27;
`;

export default Playoff;
