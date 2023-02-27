import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledButton = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  align-items: center;
  gap: ${({ theme }) => theme.space[2]}px;
  padding-top: ${({ theme }) => theme.space[3]}px;
  padding-bottom: ${({ theme }) => theme.space[3]}px;
  padding-left: ${({ theme }) => theme.space[4]}px;
  padding-right: ${({ theme }) => theme.space[4]}px;
  border: ${({ theme }) => theme.borders.normal};
  border-color: ${({ theme }) => theme.colors.text};
  border-radius: ${({ theme }) => theme.radii.normal};
  background-color: ${({ theme, disabled }) =>
    disabled ? theme.colors.red : theme.colors.primary};
  color: ${({ theme }) => theme.colors.text};
  cursor: ${({ disabled }) => !disabled && 'pointer'};
  transition: all ${({ theme }) => theme.animation.cubicBezier};
  :hover:not(:disabled),
  :focus {
    background-color: ${({ theme }) => theme.colors.text};
    color: ${({ theme }) => theme.colors.primary};
  }
  :active {
    opacity: 0.5;
  }
`;

const Button = ({ type = 'button', disabled = false, icon: Icon = null, children, ...props }) => {
  return (
    <StyledButton type={type} disabled={disabled} {...props}>
      {Icon && <Icon />}
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  icon: PropTypes.elementType,
};

export default Button;
