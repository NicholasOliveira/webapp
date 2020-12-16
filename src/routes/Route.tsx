import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { useSelector } from 'react-redux';
import AuthLayout from '../pages/_layouts/auth';
import DefaultLayout from '../pages/_layouts/default';
import { createSelectorHook } from '../interfaces/userInterfaces';

export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}: any) {
  const { signed, statemenu } = useSelector(
    (state: createSelectorHook) => state.users
  );
  if (!signed && isPrivate) {
    return <Redirect to="/signin" />;
  }

  if (signed && !isPrivate) {
    return <Redirect to="/dashboard" />;
  }
  const Layout = signed ? DefaultLayout : AuthLayout;

  return (
    <Route
      {...rest}
      render={props => (
        <Layout>
          <Component statemenu={statemenu} {...props} />
        </Layout>
      )}
    />
  );
}
