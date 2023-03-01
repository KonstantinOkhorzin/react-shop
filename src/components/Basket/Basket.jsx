import { useState } from 'react';
import { MdShoppingCart } from 'react-icons/md';
import { BsFillBasket2Fill } from 'react-icons/bs';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import IconButton from '../UI/IconButton';
import Badge from '../UI/Badge';
import Modal from '../UI/Modal';
import OrderInfo from '../OrderInfo';

const DefaultBasket = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.space[4]}px;
  svg {
    width: 50px;
    height: 50px;
  }
  p {
    font-size: ${({ theme }) => theme.fontSizes.l}px;
  }
`;

const Basket = ({ order, ...restProps }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const toggleModal = () => {
    setModalIsOpen(state => !state);
  };

  return (
    <>
      <IconButton aria-label='cart' onClick={toggleModal}>
        {order.length > 0 && <Badge quantity={order.length} />}
        <MdShoppingCart />
      </IconButton>
      {modalIsOpen && (
        <Modal onCloseModal={toggleModal}>
          {order.length > 0 ? (
            <OrderInfo order={order} {...restProps} />
          ) : (
            <DefaultBasket>
              <BsFillBasket2Fill />
              <p>Basket is empty</p>
            </DefaultBasket>
          )}
        </Modal>
      )}
    </>
  );
};

Basket.propTypes = {
  order: PropTypes.array.isRequired,
};

export default Basket;
