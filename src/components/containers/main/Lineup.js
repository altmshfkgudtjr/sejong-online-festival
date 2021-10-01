import styled from 'styled-components';
// components
import MainLayout from 'components/layouts';
import Emphahsis from 'components/presenters/common/Emphasis';

const Lineup = () => {
  return (
    <Layout>
      <Emphahsis></Emphahsis>
    </Layout>
  );
};

const Layout = styled(MainLayout)`
  margin: 140px auto;
`;

export default Lineup;
