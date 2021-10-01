import styled from 'styled-components';
// components
import MainLayout from 'components/layouts';
import MiniLogo from 'components/layouts/MiniLogo';
// styles
import { palette, zIndex } from 'lib/styles';

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderLayout>
        <MiniLogo />
        <ItemList>
          <Item>
            <a href="#schedule">일정</a>
          </Item>
          <Item>
            <a href="#live">실시간 라이브</a>
          </Item>
          <Item>
            <a href="#lineup">LINE-UP</a>
          </Item>
          <Item>
            <a href="#esports">E-SPROTS</a>
          </Item>
          <Item>
            <a href="#exhibition">동아리</a>
          </Item>
          <Item>
            <a href="#contact">문의</a>
          </Item>
        </ItemList>
      </HeaderLayout>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 58px;
  background: ${palette.background.bg1};
  z-index: ${zIndex.header};
`;

const HeaderLayout = styled(MainLayout)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ItemList = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Item = styled.li`
  & > a {
    color: ${palette.white};
    font-size: 1rem;
    margin: 14px;
  }
`;

export default Header;
