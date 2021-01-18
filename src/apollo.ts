import { ApolloClient, createHttpLink, InMemoryCache, makeVar } from '@apollo/client';
import { LOCALSTORAGE_TOKEN } from './constants';
import { setContext } from "@apollo/client/link/context";

const token = localStorage.getItem(LOCALSTORAGE_TOKEN);
export const isLoggedInVar = makeVar(Boolean(token));
export const authTokenVar = makeVar(token);

console.log("isLoggedInVar is:", isLoggedInVar());
console.log("authTokenVar is:", authTokenVar());

const httpLink = createHttpLink({
  uri: "http://localhost:4000/graphql",
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      "x-jwt": authTokenVar() || "",
    },
  };
});

export const client = new ApolloClient({
//   uri: 'https://48p1r2roz4.sse.codesandbox.io',
  link: authLink.concat(httpLink),
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          isLoggedIn: {
            read() {
              return isLoggedInVar();
            }
          },
          token: {
            read() {
              return authTokenVar();
            }
          }
        }
      }
    }
  })
});