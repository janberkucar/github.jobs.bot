import React, { Component, Fragment } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import JobItem from "./JobItem";

const JOBS_QUERY = gql`
  query JobsQuery {
    jobs {
      title
      company
      type
      location
      created_at
      id
    }
  }
`;

export class Jobs extends Component {
  render() {
    return (
      <Fragment>
        <h1 className="display-4 my3">Jobs</h1>
        <Query query={JOBS_QUERY}>
          {({ loading, error, data }) => {
            if (loading) return <h4> Loading ...</h4>;
            if (error) console.log(error);
            // Seperate component to loop through data.

            return (
              <Fragment>
                {data.jobs.map(job => (
                  <JobItem key={job.id} job={job} />
                ))}
              </Fragment>
            );
          }}
        </Query>
      </Fragment>
    );
  }
}

export default Jobs;
