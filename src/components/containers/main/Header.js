import styled from 'styled-components';
// components
import MiniLogo from 'components/layouts/MiniLogo';
import Menus from 'components/presenters/main/header/Menus';

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderLayout>
        <MiniLogo />
        <Menus />
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

const HeaderLayout = styled.div`
  width: 1080px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default Header;
