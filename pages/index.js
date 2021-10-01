// components
import Intro from 'components/containers/main/Intro';
import Header from 'components/containers/headers/Main';
import Schedule from 'components/containers/main/Schedule';
import Live from 'components/containers/main/Live';
import Lineup from 'components/containers/main/Lineup';
import Esports from 'components/containers/main/Esports';
import IntroInfo from 'components/presenters/main/IntroInfo';
import Banner from 'components/presenters/common/Banner';
import Footer from 'components/presenters/common/Footer';

const MainPage = () => {
  return (
    <>
      <Intro>
        <IntroInfo />
      </Intro>

      <Banner message="즐길 준비 되셨나요?" />

      <Header />

      <div id="schedule">
        <Schedule />
      </div>

      <div id="live">
        <Live />
      </div>

      <div id="lineup">
        <Lineup />
      </div>

      <div id="esports">
        <Esports />
      </div>

      <div id="exhibition">{/* <Exihibition /> */}</div>

      <div id="contact">
        <Footer />
      </div>
    </>
  );
};

export default MainPage;
