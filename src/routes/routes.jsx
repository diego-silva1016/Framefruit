import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from '../pages/Cart';
import Login from '../pages/Login';
import ProductList from '../pages/ProductsList';
import PrivateRoute from './PrivateRoute';

function RoutesComponent() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Login />} path="/login" />
        <Route element={<PrivateRoute element={<ProductList />} />} path="/" />
        <Route element={<PrivateRoute element={<Cart />} />} path="/cart" />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesComponent;
