import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import AuthLayout from '../pages/_layouts/auth';
import DefaultLayout from '../pages/_layouts/default';

import { store } from '../store';

export default function RouteWrapper({
  component: Component,
  isPrivate,
  isAdmin,
  isAuth,
  isBuy,
  ...rest
}) {
  const { signed } = store.getState().auth;
  const {profile} = store.getState().user;
  const { cartItem } = store.getState().cart;


  const amountCart = cartItem.length;



 if( signed && isAdmin) {
  if(profile.email !== 'admin@creditfake.com' && isAdmin ) {
    return <Redirect to="/" />;
  }
 }

 if( !signed && isAdmin) {
    return <Redirect to="/" />
 }

  if (signed && isAuth) {
    return <Redirect to="/" />;
  }

  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }

  if (signed && amountCart <= 0 && isBuy) {
    return <Redirect to="/" />;
  }

  const Layout = isAuth ? AuthLayout : DefaultLayout;

  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  isAuth: PropTypes.bool,
  isAdmin: PropTypes.bool,
  isBuy: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
  isAuth: false,
  isAdmin: false,
  isBuy: false,
};
