import MainLayout from 'components/layouts';
import styled from 'styled-components';
// containers
import Header from 'components/containers/headers/index';
import Exhibition from 'components/containers/manage/Exhibition';
// presenters
import Banner from 'components/presenters/common/Banner';
import Footer from 'components/presenters/common/Footer';

const ManageCrewPage = () => {
  return (
    <>
      <Header />
      <Banner message="우리의 축제. 우리의 손으로." />
      <Layout>
        <Exhibition />
      </Layout>
      <Footer />
    </>
  );
};

const Layout = styled(MainLayout)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 240px;
`;

export default ManageCrewPage;
