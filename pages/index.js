// components
import Intro from 'components/containers/main/Intro';
import Header from 'components/containers/main/Header';
import IntroInfo from 'components/presenters/main/IntroInfo';

export default function MainPage() {
  return (
    <>
      <Intro>
        <IntroInfo />
      </Intro>

      <Header />
    </>
  );
}
