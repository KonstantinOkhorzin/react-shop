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
  background-color: transparent;
  color: ${({ theme, disabled }) => (disabled ? theme.colors.grey : theme.colors.text)};
  cursor: ${({ disabled }) => !disabled && 'pointer'};
  svg {
    fill: currentColor;
    width: 20px;
    height: 20px;
  }
  :hover:not(:disabled),
  :focus:not(:disabled) {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;

const IconButton = ({ children, type = 'button', disabled = false, ...allyProps }) => {
  return (
    <StyledIconButton type={type} disabled={disabled} {...allyProps}>
      {children}
    </StyledIconButton>
  );
};

IconButton.propTypes = {
  children: PropTypes.node.isRequired,
  'aria-label': PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};

export default IconButton;
