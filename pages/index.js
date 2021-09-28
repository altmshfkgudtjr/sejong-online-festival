import Link from 'next/link';

export default function MainPage() {
  return (
    <div>
      <h1>Main</h1>
      <Link href="/login" pasHref>
        <a>로그인하기</a>
      </Link>
    </div>
  );
}
