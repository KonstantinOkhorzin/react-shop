import { useContext } from 'react';

import OrderList from '../OrderList';
import { Order, Title, Total } from './OrderInfo.styled';
import OrderContext from '../../context/order/OrderContext';

const OrderInfo = () => {
  const { order } = useContext(OrderContext);
  const orderTotalPrice = order.reduce((total, { price, quantity }) => total + price * quantity, 0);
  return (
    <Order>
      <Title>Your order</Title>
      <OrderList />
      <Total>Order total price: {orderTotalPrice}</Total>
    </Order>
  );
};

export default OrderInfo;
