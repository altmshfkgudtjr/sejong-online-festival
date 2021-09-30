import MainContainer from 'components/containers/main/MainContainer';
import Link from 'next/link';

export default function MainPage() {
  return (
    <>
      <MainContainer />
      <Link href="/login" pasHref>
        <a>로그인하기</a>
      </Link>
    </>
  );
}
