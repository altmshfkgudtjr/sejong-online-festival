// components
import Intro from 'components/containers/main/Intro';
import Header from 'components/containers/main/Header';
import IntroInfo from 'components/presenters/main/IntroInfo';
import Banner from 'components/presenters/common/Banner';

export default function MainPage() {
  return (
    <>
      <Intro>
        <IntroInfo />
      </Intro>

      <Banner message="즐길 준비 되셨나요?" />

      <Header />
    </>
  );
}
