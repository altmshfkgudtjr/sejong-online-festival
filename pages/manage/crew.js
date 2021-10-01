// containers
import Header from 'components/containers/headers/index';
import Exhibition from 'components/containers/main/Exhibition';
import MainLayout from 'components/layouts';
// presenters
import Apply from 'components/presenters/common/Apply';
import Banner from 'components/presenters/common/Banner';

const ManageCrewPage = () => {
  return (
    <>
      <Header />
      <Banner message="우리의 축제. 우리의 손으로." />
      <MainLayout>
        <Apply />
      </MainLayout>
    </>
  );
};

export default ManageCrewPage;
