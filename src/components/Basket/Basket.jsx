import { useState, useContext } from 'react';
import { MdShoppingCart } from 'react-icons/md';
import { BsFillBasket2Fill } from 'react-icons/bs';
import styled from 'styled-components';

import IconButton from '../UI/IconButton';
import Badge from '../UI/Badge';
import Modal from '../UI/Modal';
import OrderInfo from '../OrderInfo';
import OrderContext from '../../context/order/OrderContext';

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

const Basket = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { order } = useContext(OrderContext);

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
            <OrderInfo/>
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


export default Basket;
