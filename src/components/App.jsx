import { Routes, Route } from 'react-router-dom';

import Layout from './Layout';
import Goods from '../pages/Goods';
import Order from '../pages/Order';
import NotFound from '../pages/NotFound';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Goods />} />
        <Route path='goods' element={<Goods />} />
        <Route path='order' element={<Order />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
