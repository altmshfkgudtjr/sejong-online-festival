import MainLayout from 'components/layouts';
// components
import ColumnView from 'components/containers/crew/ColumnView';
import GridView from 'components/containers/crew/GridView';
import Header from 'components/containers/headers';
// presenters
import Banner from 'components/presenters/common/Banner';
import Emphasis from 'components/presenters/common/Emphasis';
import Footer from 'components/presenters/common/Footer';
import Btns from 'components/presenters/crew/Btns';
import Comments from 'components/presenters/common/Comments';

export default function CrewPage() {
  return (
    <>
      <Header />
      <Banner />
      <MainLayout>
        <GridView />
        <ColumnView />
        <Btns />
        <Emphasis>
          동아리 응원 문구를 남겨보세요
          <br />
          <strong>방명록</strong>
        </Emphasis>
        <Comments />
      </MainLayout>
      <Footer />
    </>
  );
}
