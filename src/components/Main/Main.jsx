import styled from 'styled-components';

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: ${({ theme }) => theme.space[5]}px;
  max-width: 1200px;
  margin: 0 auto;
  padding-left: ${({ theme }) => theme.space[4]}px;
  padding-right: ${({ theme }) => theme.space[4]}px;
`;

const Main = ({children}) => {
  return (
    <StyledMain>
      {children}
    </StyledMain>
  );
};

export default Main;
