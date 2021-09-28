import Link from 'next/link';

export default function LoginPage() {
  return (
    <div>
      <h1>Login</h1>
      <Link href="/" pasHref>
        <a>메인으로</a>
      </Link>
    </div>
  );
}
