import { useContext } from 'react';
import styled from 'styled-components';

import OrderContext from '../../context/order/OrderContext';
import OrderItem from '../OrderItem/OrderItem';

const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.space[4]}px;
`;

const OrderList = () => {
  const { order } = useContext(OrderContext);

  return (
    <List>
      {order.map(item => (
        <OrderItem key={item.id} {...item} />
      ))}
    </List>
  );
};

export default OrderList;
