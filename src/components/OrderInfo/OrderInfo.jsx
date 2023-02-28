import OrderList from '../OrderList';
import PropTypes from 'prop-types';

import { Order, Title, Total } from './OrderInfo.styled';

const OrderInfo = ({ order, ...restProps }) => {
  const orderTotalPrice = order.reduce((total, { price, quantity }) => total + price * quantity, 0);
  return (
    <Order>
      <Title>Your order</Title>
      <OrderList order={order} {...restProps} />
      <Total>Order total price: {orderTotalPrice}</Total>
    </Order>
  );
};

OrderInfo.propTypes = {
  order: PropTypes.array.isRequired,
};

export default OrderInfo;
