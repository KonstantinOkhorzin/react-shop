import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledIconButton = styled.button`
  position: relative;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.radii.round};
  transition: all ${({ theme }) => theme.animation.cubicBezier};
  background-color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  svg {
    fill: currentColor;
    width: 20px;
    height: 20px;
  }
  :hover,
  :focus {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;

const IconButton = ({ children, type = 'button', ...allyProps }) => {
  return (
    <StyledIconButton type={type} {...allyProps}>
      {children}
    </StyledIconButton>
  );
};

IconButton.propTypes = {
  children: PropTypes.node.isRequired,
  'aria-label': PropTypes.string.isRequired,
};

export default IconButton;
