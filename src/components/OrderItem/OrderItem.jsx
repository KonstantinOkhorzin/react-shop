import { MdDelete } from 'react-icons/md';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import { AiFillMinusCircle } from 'react-icons/ai';
import PropTypes from 'prop-types';
import { useContext } from 'react';

import OrderContext from '../../context/order/OrderContext';
import IconButton from '../UI/IconButton';
import { Item, Title, QuantityControls, Quantity, Total, RemoveButtom } from './OrderItem.styled';
import { convertedPrice } from '../OrderInfo/OrderInfo';

const OrderItem = ({ id, name, price, quantity }) => {
  const { decreaseQuantity, inputQuantityChange, increaseQuantity, removeOrderItem } =
    useContext(OrderContext);
  const totalItemPrice = price * quantity;
  const convertedTotalItemPrice = convertedPrice(totalItemPrice);

  return (
    <Item>
      <Title>{name}</Title>
      <QuantityControls>
        <IconButton
          onClick={() => decreaseQuantity(id)}
          aria-label='decrease quantity'
          disabled={quantity === 1}
        >
          <AiFillMinusCircle />
        </IconButton>
        <Quantity
          value={quantity}
          onChange={e => inputQuantityChange(e.target.value, id)}
          aria-label='quantity of goods'
        />
        <IconButton
          onClick={() => increaseQuantity(id)}
          aria-label='increase quantity'
          disabled={quantity === 99}
        >
          <BsFillPlusCircleFill />
        </IconButton>
      </QuantityControls>
      <Total>{convertedTotalItemPrice}</Total>
      <RemoveButtom onClick={() => removeOrderItem(id)} aria-label='remove order item'>
        <MdDelete />
      </RemoveButtom>
    </Item>
  );
};

OrderItem.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default OrderItem;
