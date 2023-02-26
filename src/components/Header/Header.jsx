import styled from 'styled-components';

import Basket from '../Basket';

const StyledHeader = styled.header`
  display: flex;
  justify-content: flex-end;
  background-color: ${({ theme }) => theme.colors.primary};
  padding-left: ${({ theme }) => theme.space[5]}px;
  padding-right: ${({ theme }) => theme.space[5]}px;
  padding-top: ${({ theme }) => theme.space[3]}px;
  padding-bottom: ${({ theme }) => theme.space[3]}px;
`;

const Header = () => {
  return (
    <StyledHeader>
      <Basket quantity={0} />
    </StyledHeader>
  );
};

export default Header;
