import { useReducer } from 'react';

import orderReducer from '../../reducers/orderReducer';
import OrderContext from './OrderContext';

const initialState = {
  order: [],
};

const Provider = ({ children }) => {
  const [value, dispatch] = useReducer(orderReducer, initialState);

  value.addToBasket = item => {
    dispatch({ type: 'ADD_TO_BASKET', payload: item });
  };

  value.removeOrderItem = id => {
    dispatch({ type: 'REMOVE_ORDER_ITEM', payload: { id } });
  };

  value.decreaseQuantity = id => {
    dispatch({ type: 'DECREASE_QUANTITY', payload: { id } });
  };

  value.increaseQuantity = id => {
    dispatch({ type: 'INCREASE_QUANTITY', payload: { id } });
  };

  value.inputQuantityChange = (value, id) => {
    dispatch({ type: 'INPUT_QUANTITY_CHANGE', payload: { value, id } });
  };

  return <OrderContext.Provider value={value}>{children}</OrderContext.Provider>;
};

export default Provider;
