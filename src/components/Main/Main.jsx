import styled from 'styled-components';

import GoodsInfo from '../GoodsInfo';

const StyledMain = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding-left: ${({ theme }) => theme.space[4]}px;
  padding-right: ${({ theme }) => theme.space[4]}px;
`;

const Main = () => {
  return (
    <StyledMain>
      <GoodsInfo/>
    </StyledMain>
  );
};

export default Main;
