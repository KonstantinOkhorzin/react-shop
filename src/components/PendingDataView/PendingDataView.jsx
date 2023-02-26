import styled from 'styled-components';

import Spinner from '../UI/Spinner';

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const PendingDataView = () => {
  return (
    <Container>
      <Spinner />
    </Container>
  );
};

export default PendingDataView;
