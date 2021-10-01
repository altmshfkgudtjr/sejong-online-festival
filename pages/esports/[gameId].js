import { useRouter } from 'next/router';

const EsportsPage = () => {
  const router = useRouter();
  const { gameId } = router.query;

  return <div>{gameId}</div>;
};

export default EsportsPage;
