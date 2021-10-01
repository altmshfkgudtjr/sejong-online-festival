import { useRouter } from 'next/router';
import { useEffect } from 'react';
// components
import MainLayout from 'components/layouts';
import ColumnView from 'components/containers/crew/ColumnView';
import GridView from 'components/containers/crew/GridView';
import Header from 'components/containers/headers';
// presenters
import Banner from 'components/presenters/common/Banner';
import Emphasis from 'components/presenters/common/Emphasis';
import Footer from 'components/presenters/common/Footer';
import Btns from 'components/presenters/crew/Btns';
import Comments from 'components/presenters/common/Comments';
// slices
import { getExhibition } from 'slices/exhibition.thunk';
import { getCommentList } from 'slices/main.thunk';
// hooks
import { useSelector, useDispatch } from 'hooks/common/useStore';

const ExhibitionPage = () => {
  const router = useRouter();
  const { exhibitionId } = router.query;

  const dispatch = useDispatch();
  const exhibition = useSelector(state => state.exhibition.currentExhibition);
  const commentList = useSelector(state => state.main.commentList);

  useEffect(() => {
    if (!exhibitionId) {
      return;
    }

    dispatch(getExhibition(exhibitionId));
  }, [dispatch, exhibitionId]);

  useEffect(() => {
    if (!exhibitionId) {
      return;
    }

    dispatch(getCommentList({ contentId: exhibitionId, skip: 0, limit: 10 }));
  }, [dispatch, exhibitionId]);

  return (
    <>
      <Header />
      <Banner />
      <MainLayout>
        {exhibition.type === 'gallery_normal' && <ColumnView />}
        {exhibition.type === 'gallery_grid' && <GridView />}
        {/* TODO 유튜브 전시회 연결 */}
        {exhibition.type === 'video_youtube' && null}
        <Btns />
        <Emphasis>
          동아리 응원 문구를 남겨보세요
          <br />
          <strong>방명록</strong>
        </Emphasis>
        <Comments contentId={exhibitionId} commentList={commentList} />
      </MainLayout>
      <Footer />
    </>
  );
};

export default ExhibitionPage;
