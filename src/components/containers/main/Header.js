import styled from 'styled-components';
// components
import MainLayout from 'components/layouts';
import MiniLogo from 'components/layouts/MiniLogo';
// styles
import { palette } from 'lib/styles';

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderLayout>
        <MiniLogo />

        <ItemList>
          <Item>
            <button>일정</button>
          </Item>
          <Item>
            <button>LINE-UP</button>
          </Item>
          <Item>
            <button>E-SPROTS</button>
          </Item>
          <Item>
            <button>동아리</button>
          </Item>
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
`;

const HeaderLayout = styled(MainLayout)`
  width: 1080px;
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
