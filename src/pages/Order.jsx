import { useContext } from 'react';
import OrderContext from '../context/order/OrderContext';

import OrderInfo from '../components/OrderInfo';
import DefaultBasket from '../components/DefaultBasket';

const Order = () => {
  const { order } = useContext(OrderContext);

  return <>{order.length > 0 ? <OrderInfo /> : <DefaultBasket />}</>;
};

export default Order;
