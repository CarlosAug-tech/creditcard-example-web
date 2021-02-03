import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Home from '../pages/Home';
import Cart from '../pages/Cart';
import FormPersonal from '../pages/FormPersonal';
import Checkout from '../pages/Checkout';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';
import AddProduct from '../pages/Product/_addProduct';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/register" component={SignUp} isAuth />

      <Route path="/cart" component={Cart} isPrivate />
      <Route path="/shipping" component={FormPersonal} isPrivate isBuy />
      <Route path="/checkout" component={Checkout} isPrivate isBuy />

      <Route path="/dashboard" component={Dashboard} isAdmin />
      <Route path="/addProduct" component={AddProduct} isAdmin />

    </Switch>
  );
}
