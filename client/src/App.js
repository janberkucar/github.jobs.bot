import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Jobs from "./components/Jobs";

import "./App.css";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="container">
        <h1> Jobs of GitHub</h1>
        <Jobs />
      </div>
    </ApolloProvider>
  );
}

export default App;
