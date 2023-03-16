const orderReducer = (state, { type, payload }) => {
  switch (type) {
    case 'ADD_TO_BASKET':
      return {
        ...state,
        order:
          state.order.findIndex(orderItem => orderItem.id === payload.id) >= 0
            ? state.order.map(orderItem =>
                orderItem.id === payload.id
                  ? { ...orderItem, quantity: orderItem.quantity + 1 }
                  : orderItem
              )
            : [...state.order, { ...payload, quantity: 1 }],
      };

    case 'REMOVE_ORDER_ITEM':
      return {
        ...state,
        order: state.order.filter(item => item.id !== payload.id),
      };

    case 'DECREASE_QUANTITY':
      return {
        ...state,
        order: state.order.map(item =>
          item.id === payload.id
            ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : item.quantity }
            : item
        ),
      };

    case 'INCREASE_QUANTITY':
      return {
        ...state,
        order: state.order.map(item =>
          item.id === payload.id
            ? { ...item, quantity: item.quantity < 99 ? item.quantity + 1 : item.quantity }
            : item
        ),
      };

    case 'INPUT_QUANTITY_CHANGE':
      const value = Number(payload.value.replace(/\D/g, ''));
      return {
        ...state,
        order: state.order.map(item =>
          item.id === payload.id
            ? { ...item, quantity: value > 0 && value < 100 ? value : item.quantity }
            : item
        ),
      };

    default:
      return state;
  }
};

export default orderReducer;
