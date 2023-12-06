import React from "react";
import ReactDOM from "react-dom/client";
import { FluentProvider, teamsLightTheme } from "@fluentui/react-components";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
  useQuery,
} from "@apollo/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import SideBar from "./views/SideBar";
import reportWebVitals from "./reportWebVitals";

const client = new ApolloClient({
  uri: "https://swapi-graphql.netlify.app/.netlify/functions/index",
  cache: new InMemoryCache(),
});
// const client = ...
const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: "/SideBar",
    element: <SideBar />,
  },
]);
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <FluentProvider theme={teamsLightTheme}>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </FluentProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
