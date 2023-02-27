import PropTypes from 'prop-types';

import GoodsList from '../GoodsList/GoodsList';
import PendingDataView from '../PendingDataView';
import ErrorDataView from '../ErrorDataView';

const GoodsInfo = ({ goods, status, error, onAddToBasket }) => {
  switch (status) {
    case 'pending':
      return <PendingDataView />;

    case 'rejected':
      return <ErrorDataView error={error} />;

    case 'resolved':
      return <GoodsList goods={goods} onAddToBasket={onAddToBasket} />;

    default:
      return null;
  }
};

ErrorDataView.propTypes = {
  status: PropTypes.string.isRequired,
};

export default GoodsInfo;
