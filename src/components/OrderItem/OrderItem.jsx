import { MdDelete } from 'react-icons/md';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import { AiFillMinusCircle } from 'react-icons/ai';
import PropTypes from 'prop-types';

import IconButton from '../UI/IconButton';
import { Item, Title, QuantityControls, Quantity, Total, RemoveButtom } from './OrderItem.styled';

const OrderItem = ({
  name,
  price,
  quantity,
  onRemoveOrderItem,
  onDecreaseQuantity,
  onIncreaseQuantity,
  onInputQuantityChange,
}) => {
  const totalItemPrice = price * quantity;

  return (
    <Item>
      <Title>{name}</Title>
      <QuantityControls>
        <IconButton
          onClick={onDecreaseQuantity}
          aria-label='decrease quantity'
          disabled={quantity === 1}
        >
          <AiFillMinusCircle />
        </IconButton>
        <Quantity
          value={quantity}
          onChange={onInputQuantityChange}
          aria-label='quantity of goods'
        />
        <IconButton
          onClick={onIncreaseQuantity}
          aria-label='increase quantity'
          disabled={quantity === 99}
        >
          <BsFillPlusCircleFill />
        </IconButton>
      </QuantityControls>
      <Total>{totalItemPrice}</Total>
      <RemoveButtom onClick={onRemoveOrderItem} aria-label='remove order item'>
        <MdDelete />
      </RemoveButtom>
    </Item>
  );
};

OrderItem.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  onRemoveOrderItem: PropTypes.func.isRequired,
  onDecreaseQuantity: PropTypes.func.isRequired,
  onIncreaseQuantity: PropTypes.func.isRequired,
  onInputQuantityChange: PropTypes.func.isRequired,
};

export default OrderItem;
