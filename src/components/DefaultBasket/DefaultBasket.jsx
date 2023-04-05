import { BsFillBasket2Fill } from 'react-icons/bs';
import styled from 'styled-components';

import StyledLink from '../UI/StyledLink';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.space[4]}px;
  svg {
    width: 50px;
    height: 50px;
  }
  p {
    font-size: ${({ theme }) => theme.fontSizes.l}px;
  }
`;

const DefaultBasket = () => {
  return (
    <Container>
      <BsFillBasket2Fill />
      <p>Basket is empty</p>
      <StyledLink to='/goods'>Back to goods</StyledLink>
    </Container>
  );
};

export default DefaultBasket;
