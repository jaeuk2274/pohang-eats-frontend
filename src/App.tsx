import { ApolloProvider } from '@apollo/client';
import React from 'react';
import {client} from "./apollo";

function App() {
  return (
    <ApolloProvider client={client}>
    <div className="bg-black"> 
      <h1 className="text-xl text-white ">hello tailwind</h1>
    </div>
    </ApolloProvider>
  );
}

export default App;
