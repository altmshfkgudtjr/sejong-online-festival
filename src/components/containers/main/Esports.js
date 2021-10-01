import styled from 'styled-components';
import { useEffect } from 'react';
// components
import MainLayout from 'components/layouts';
import Emphahsis from 'components/presenters/common/Emphasis';
import EsportsCard from 'components/presenters/esports/Card';
// utils
import { formatToPrice } from 'lib/utils/number';

const Esports = () => {
  return (
    <Layout>
      <Emphahsis>
        게이머들의 심장을 뛰게하다.
        <br />
        <strong>E-SPORTS</strong>
      </Emphahsis>

      <ScrollLayout>
        <EsportsCard name="리그오브레전드" />
        <EsportsCard name="배틀그라운드" />
        <EsportsCard name="피파온라인4" />
      </ScrollLayout>

      <Emphahsis>
        총 상금 <strong>{formatToPrice(2450000)}</strong>원의 주인공은?
      </Emphahsis>
    </Layout>
  );
};

const Layout = styled(MainLayout)`
  margin: 200px auto;
`;

const ScrollLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 380px;
  flex-wrap: nowrap;
  padding: 0 calc((100% - 1080px) / 2) 0 calc((100% - 1080px) / 2 - 20px);
  margin: 124px 0;
  overflow-x: auto;
  overflow-y: hidden;

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none;
    width: 0;
    background-color: transparent;
  }
`;

export default Esports;
