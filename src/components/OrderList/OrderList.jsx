import PropTypes from 'prop-types';

import OrderItem from '../OrderItem/OrderItem';

const OrderList = ({
  order,
  onRemoveOrderItem,
  onDecreaseQuantity,
  onIncreaseQuantity,
  onInputQuantityChange,
}) => {
  return (
    <ul>
      {order.map(({ id, ...restProps }) => (
        <OrderItem
          key={id}
          {...restProps}
          onRemoveOrderItem={() => onRemoveOrderItem(id)}
          onDecreaseQuantity={() => onDecreaseQuantity(id)}
          onIncreaseQuantity={() => onIncreaseQuantity(id)}
          onInputQuantityChange={e => onInputQuantityChange(e, id)}
        />
      ))}
    </ul>
  );
};

OrderList.propTypes = {
  order: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    })
  ).isRequired,
};

export default OrderList;
