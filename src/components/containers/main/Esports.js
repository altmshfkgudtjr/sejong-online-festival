import styled from 'styled-components';
import { useEffect } from 'react';
// components
import MainLayout from 'components/layouts';
import Emphahsis from 'components/presenters/common/Emphasis';
// slices
import { getLive } from 'slices/main.thunk';
// hooks
import { useSelector, useDispatch } from 'hooks/common/useStore';
// styles
import { palette } from 'lib/styles';

const Esports = () => {
  const dispatch = useDispatch();
  const liveVideoList = useSelector(state => state.main.liveVideoList);

  useEffect(() => {
    dispatch(getLive());
  }, [dispatch]);

  return (
    <Layout>
      <Emphahsis>
        게이머들의 심장을 뛰게하다.
        <br />
        <strong>E-SPORTS</strong>
      </Emphahsis>
    </Layout>
  );
};

const Layout = styled(MainLayout)`
  margin: 200px auto;
`;

export default Esports;
