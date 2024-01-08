import { useContext } from 'react';
import PropTypes from 'prop-types';
import { FaCartPlus } from 'react-icons/fa';

import OrderContext from '../../context/order/OrderContext';
import Button from '../UI/Button';
import { Card, WrapperImg, Content, Title, Description } from './GoodsCard.styled';

const GoodsCard = ({ id, name, description, price, full_background: src }) => {
  const { addToBasket } = useContext(OrderContext);

  return (
    <Card>
      <WrapperImg>
        <img src={src} alt='' />
      </WrapperImg>
      <Content>
        <Title>{name}</Title>
        <Description>{description === '' ? 'There is no description' : description}</Description>
        <Button icon={FaCartPlus} onClick={() => addToBasket({ id, name, price })}>
          Add to cart
        </Button>
      </Content>
    </Card>
  );
};

GoodsCard.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  full_background: PropTypes.string.isRequired,
};

export default GoodsCard;
