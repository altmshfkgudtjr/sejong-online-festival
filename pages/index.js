// components
import Intro from 'components/containers/main/Intro';
import Header from 'components/containers/main/Header';
import Schedule from 'components/containers/main/Schedule';
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
    </>
  );
};

export default MainPage;
