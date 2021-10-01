// components
import Intro from 'components/containers/main/Intro';
import Header from 'components/containers/headers/Main';
import Schedule from 'components/containers/main/Schedule';
import Live from 'components/containers/main/Live';
import Lineup from 'components/containers/main/Lineup';
import IntroInfo from 'components/presenters/main/IntroInfo';
import Banner from 'components/presenters/common/Banner';

const MainPage = () => {
  return (
    <>
      <Intro>
        <IntroInfo />
      </Intro>

      <Banner message="즐길 준비 되셨나요?" />

      <Header />

      <Schedule />

      <Live />

      <Lineup />
    </>
  );
};

export default MainPage;
