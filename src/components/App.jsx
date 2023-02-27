import { useState, useEffect } from 'react';
import axios from 'axios';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';

import { API_KEY, API_URL } from '../config';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

function App() {
  const [goods, setGoods] = useState([]);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);
  const [order, setOrder] = useState([]);

  useEffect(() => {
    setStatus(Status.PENDING);

    axios
      .get(API_URL, {
        headers: { Authorization: API_KEY },
      })
      .then(response => {
        setGoods(response.data.featured);
        setStatus(Status.RESOLVED);
      })
      .catch(error => {
        setError(error.message);
        setStatus(Status.REJECTED);
      });
  }, []);
  
  const addToBasket = item => {
    setOrder(order =>
      order.findIndex(orderItem => orderItem.id === item.id) >= 0
        ? order.map(orderItem =>
            orderItem.id === item.id
              ? { ...orderItem, quantity: orderItem.quantity + 1 }
              : orderItem
          )
        : [...order, { ...item, quantity: 1 }]
    );
  };

  return (
    <>
      <Header quantity={order.length} />
      <Main goods={goods} error={error} status={status} onAddToBasket={addToBasket} />
      <Footer />
    </>
  );
}

export default App;
