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

  const removeOrderItem = id => {
    setOrder(order => order.filter(item => item.id !== id));
  };

  const decreaseQuantity = id => {
    setOrder(order =>
      order.map(item =>
        item.id === id
          ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : item.quantity }
          : item
      )
    );
  };

  const increaseQuantity = id => {
    setOrder(order =>
      order.map(item =>
        item.id === id
          ? { ...item, quantity: item.quantity < 99 ? item.quantity + 1 : item.quantity }
          : item
      )
    );
  };

  const inputQuantityChange = (e, id) => {
    const value = Number(e.target.value.replace(/\D/g, ''));
    setOrder(order =>
      order.map(item =>
        item.id === id
          ? { ...item, quantity: value > 0 && value < 100 ? value : item.quantity }
          : item
      )
    );
  };

  return (
    <>
      <Header
        order={order}
        onRemoveOrderItem={removeOrderItem}
        onDecreaseQuantity={decreaseQuantity}
        onIncreaseQuantity={increaseQuantity}
        onInputQuantityChange={inputQuantityChange}
      />
      <Main goods={goods} error={error} status={status} onAddToBasket={addToBasket} />
      <Footer />
    </>
  );
}

export default App;
