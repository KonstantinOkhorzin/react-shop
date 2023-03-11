import { useContext } from 'react';
import { MdShoppingCart } from 'react-icons/md';
import styled from 'styled-components';

import Badge from '../UI/Badge';
import OrderContext from '../../context/order/OrderContext';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
  position: relative;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${({ theme }) => theme.radii.round};
  transition: background-color ${({ theme }) => theme.animation.cubicBezier};
  :hover,
  :focus {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
  svg {
    width: 25px;
    height: 25px;
  }
`;

const Basket = () => {
  const { order } = useContext(OrderContext);

  return (
    <StyledLink to='/order'>
      {order.length > 0 && <Badge quantity={order.length} />}
      <MdShoppingCart />
    </StyledLink>
  );
};

export default Basket;
