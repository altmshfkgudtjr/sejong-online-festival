import styled from 'styled-components';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import Esports from 'components/containers/main/Esports';
import Banner from 'components/presenters/common/Banner';
import Header from 'components/containers/headers';
import Tournament from 'components/containers/esports/Tournament';
import Emphahsis from 'components/presenters/common/Emphasis';
import Playoff from 'components/containers/esports/Playoff';
import Comments from 'components/presenters/common/Comments';
import Footer from 'components/presenters/common/Footer';

import { getCommentList } from 'slices/main.thunk';
// hooks
import { useSelector, useDispatch } from 'hooks/common/useStore';

const EsportsPage = () => {
  const router = useRouter();
  const { gameId } = router.query;

  const dispatch = useDispatch();
  const commentList = useSelector(state => state.main.commentList);

  useEffect(() => {
    if (!gameId) {
      return;
    }

    dispatch(getCommentList({ contentId: gameId, skip: 0, limit: 30 }));
    let timer = window.setInterval(
      () => dispatch(getCommentList({ contentId: gameId, skip: 0, limit: 30 })),
      500,
    );
    return () => window.clearInterval(timer);
  }, [dispatch, gameId]);

  return (
    <>
      <Header />
      <Esports />
      <Banner message='"리그오브레전드" 매치업' />
      <Tournament />
      <Emphahsis>
        대진표를 확인하세요!
        <br />
        <strong>PLAYOFF</strong>
      </Emphahsis>
      <Playoff />
      <Emphahsis>
        원하는 팀을 응원해주세요
        <br />
        <strong>응원하기</strong>
      </Emphahsis>
      <Comments contentId={gameId} commentList={commentList} />
      <Footer />
    </>
  );
};

export default EsportsPage;
