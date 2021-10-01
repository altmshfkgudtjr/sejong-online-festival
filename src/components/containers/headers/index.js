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
            <button>문의</button>
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
  & > button {
    color: ${palette.white};
    font-size: 1rem;
    margin: 14px;
  }
`;

export default Header;
