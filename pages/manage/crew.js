import MainLayout from 'components/layouts';
import styled from 'styled-components';
// containers
import Header from 'components/containers/headers/index';
import Exhibition from 'components/containers/main/Exhibition';
import Crew from 'components/containers/manage/Crew';
// presenters
import Apply from 'components/presenters/common/Apply';
import Banner from 'components/presenters/common/Banner';
import Footer from 'components/presenters/common/Footer';

const ManageCrewPage = () => {
  return (
    <>
      <Header />
      <Banner message="우리의 축제. 우리의 손으로." />
      <Layout>
        <Apply />
        <Crew />
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
`;

export default ManageCrewPage;
