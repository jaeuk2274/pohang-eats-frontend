import { ApolloProvider } from '@apollo/client';
import React from 'react';
import {client} from "./apollo";
import { LoggedOutRouter } from './routers/logged-out-router';

function App() {
  return <LoggedOutRouter />;
}

export default App;
