import PropTypes from 'prop-types';
import { FaCartPlus } from 'react-icons/fa';

import Button from '../UI/Button';
import { Card, Content, Title, Description } from './GoodsCard.styled';

const GoodsCard = ({ id, name, description, price, full_background: src, onAddToBasket }) => {
  return (
    <Card>
      <img src={src} alt='' />
      <Content>
        <Title>{name}</Title>
        <Description>{description}</Description>
        <Button icon={FaCartPlus} onClick={() => onAddToBasket({ id, name, price })}>
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
  onAddToBasket: PropTypes.func.isRequired,
};

export default GoodsCard;
