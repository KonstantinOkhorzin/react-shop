import styled from 'styled-components';
import PropTypes from 'prop-types';

import GoodsCard from '../GoodsCard';

const StyledList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-template-rows: auto;
  gap: ${({ theme }) => theme.space[4]}px;
`;

const GoodsList = ({ goods, onAddToBasket }) => {
  return (
    <StyledList>
      {goods.map(item => (
        <GoodsCard key={item.id} {...item} onAddToBasket={onAddToBasket} />
      ))}
    </StyledList>
  );
};

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    })
  ).isRequired,
};

export default GoodsList;
