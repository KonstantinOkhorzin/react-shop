import { useState, useEffect } from 'react';

import GoodsList from '../GoodsList/GoodsList';
import PendingDataView from '../PendingDataView';
import ErrorDataView from '../ErrorDataView';

import { fetchFeaturedGoods } from '../../services/api';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

const GoodsInfo = () => {
  const [goods, setGoods] = useState([]);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);

  useEffect(() => {
    setStatus(Status.PENDING);

    fetchFeaturedGoods()
      .then(response => {
        setGoods(
          response.data.featured.filter(
            (item, index, self) => index === self.findIndex(product => product.id === item.id)
          )
        );
        setStatus(Status.RESOLVED);
      })
      .catch(error => {
        setError(error.message);
        setStatus(Status.REJECTED);
      });
  }, []);

  switch (status) {
    case 'pending':
      return <PendingDataView />;

    case 'rejected':
      return <ErrorDataView error={error} />;

    case 'resolved':
      return <GoodsList goods={goods} />;

    default:
      return null;
  }
};

export default GoodsInfo;
