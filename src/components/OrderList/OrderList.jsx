import PropTypes from 'prop-types';
import styled from 'styled-components';

import OrderItem from '../OrderItem/OrderItem';

const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.space[4]}px;
`;

const OrderList = ({
  order,
  onRemoveOrderItem,
  onDecreaseQuantity,
  onIncreaseQuantity,
  onInputQuantityChange,
}) => {
  return (
    <List>
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
    </List>
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
