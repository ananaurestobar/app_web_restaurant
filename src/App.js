import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import GroupOrders from './group_orders/components/GroupOrders';
import GroupOrder from './group_order/components/GroupOrder';
import Order from './order/components/Order';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<GroupOrders/>}/>
          <Route path=":groupOrderId" element={<GroupOrder/>}/>
          <Route path=":groupOrderId/:orderId" element={<Order/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;