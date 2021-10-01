import styled from 'styled-components';
// styles
import { palette } from 'lib/styles';

const Chip = ({ width = '200px', height = '48px', message }) => {
  return (
    <Layout className="noselect" width={width} height={height}>
      {message}
    </Layout>
  );
};

const Layout = styled.div`
  position: relative;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
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

export default Chip;
