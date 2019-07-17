import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Jobs from "./components/Jobs";
import Job from "./components/Job";

import "./App.css";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="container">
          <h1> Jobs of GitHub</h1>
          <Route exact path="/" component={Jobs} />
          <Route exact path="/job/:id" component={Job} />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
