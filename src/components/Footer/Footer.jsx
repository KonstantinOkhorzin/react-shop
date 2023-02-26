import styled from 'styled-components';

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  padding-left: ${({ theme }) => theme.space[5]}px;
  padding-right: ${({ theme }) => theme.space[5]}px;
  padding-top: ${({ theme }) => theme.space[4]}px;
  padding-bottom: ${({ theme }) => theme.space[4]}px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text};
`;

const Footer = () => {
  return (
    <StyledFooter>
      <p>&#169; { new Date().getFullYear()} Copyright Text </p>
    </StyledFooter>
  );
};

export default Footer;
