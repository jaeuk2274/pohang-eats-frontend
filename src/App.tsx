import { gql, useQuery, useReactiveVar } from '@apollo/client';
import React from 'react';
import { isLoggedInVar } from './apollo';
import { LoggedInRouter } from './routers/logged-in-router';
import { LoggedOutRouter } from './routers/logged-out-router';

function App() {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  console.log("isLoggedIn", isLoggedIn);
  return isLoggedIn ? < LoggedInRouter /> : < LoggedOutRouter />;
}

export default App;
