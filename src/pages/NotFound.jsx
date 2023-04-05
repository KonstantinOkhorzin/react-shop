import styled from 'styled-components';

import darthVader from '../icons/404.svg';
import StyledLink from '../components/UI/StyledLink';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.space[3]}px;
`;
  

const Message = styled.p`
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes.l}px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

const NotFound = () => {
  return (
    <Container>
      <img src={darthVader} alt='darth-vader' />
      <Message>Page not found</Message>
      <StyledLink to='/goods'>Back to goods</StyledLink>
    </Container>
  );
};

export default NotFound;
