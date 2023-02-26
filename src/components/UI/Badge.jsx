import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledBadge = styled.span`
  position: absolute;
  top: -1px;
  right: -1px;
  padding-left: ${({ theme }) => theme.space[2]}px;
  padding-right: ${({ theme }) => theme.space[2]}px;
  padding-top: ${({ theme }) => theme.space[1]}px;
  padding-bottom: ${({ theme }) => theme.space[1]}px;
  background-color: ${({ theme }) => theme.colors.orange};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
  line-height: 1;
  font-size: ${({ theme }) => theme.fontSizes.xs}px;
`;

const Badge = ({ quantity }) => {
  return <StyledBadge>{quantity > 9 ? '9+' : quantity}</StyledBadge>;
};

Badge.propTypes = {
  quantity: PropTypes.number.isRequired,
};

export default Badge;
