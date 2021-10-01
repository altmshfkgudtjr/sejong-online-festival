import styled from 'styled-components';
// components
import MainLayout from 'components/layouts';
// hooks
import { useSelector } from 'hooks/common/useStore';

const Schedule = () => {
  const scheduleList = useSelector(state => state.main.scheduleList);

  return <Layout></Layout>;
};

const Layout = styled(MainLayout)`
  margin-top: 140px;
`;

const Title = styled.h2``;

export default Schedule;
