import { useContext } from 'react';

import OrderList from '../OrderList';
import { Order, Title, Total } from './OrderInfo.styled';
import OrderContext from '../../context/order/OrderContext';

export const convertedPrice = (price) => {
  return price.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
}

const OrderInfo = () => {
  const { order } = useContext(OrderContext);
  const orderTotalPrice = order.reduce((total, { price, quantity }) => total + price * quantity, 0);
  const convertedOrderTotalPrice = convertedPrice(orderTotalPrice);

  return (
    <Order>
      <Title>Your order</Title>
      <OrderList />
      <Total>Order total price: {convertedOrderTotalPrice}</Total>
    </Order>
  );
};

export default OrderInfo;
