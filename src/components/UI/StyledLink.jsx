import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.space[2]}px;
  padding-top: ${({ theme }) => theme.space[3]}px;
  padding-bottom: ${({ theme }) => theme.space[3]}px;
  padding-left: ${({ theme }) => theme.space[4]}px;
  padding-right: ${({ theme }) => theme.space[4]}px;
  border: ${({ theme }) => theme.borders.normal};
  border-color: ${({ theme }) => theme.colors.text};
  border-radius: ${({ theme }) => theme.radii.normal};
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text};
  transition: all ${({ theme }) => theme.animation.cubicBezier};
  :hover,
  :focus {
    background-color: ${({ theme }) => theme.colors.text};
    color: ${({ theme }) => theme.colors.primary};
  }
  :active {
    opacity: 0.5;
  }
`;

export default StyledLink;
