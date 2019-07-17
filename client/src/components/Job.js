import React, { Component, Fragment } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import classNames from "classnames";

const JOB_QUERY = gql`
  query JobQuery($id: ID!) {
    job(id: $id) {
      title
      company
      type
      location
      created_at
      id
    }
  }
`;

export class Job extends Component {
  render() {
    let { id } = this.props.match.params;

    return (
      <Fragment>
        <Query query={JOB_QUERY} variables={{ id }}>
          {({ loading, error, data }) => {
            if (loading) return <h4>Loading ... . . .</h4>;
            if (error) console.log(error);

            const { title, company, location, created_at, type } = data.job;

            return (
              <div className="card cardbody mb-3 container">
                <h1 className="display-4 my-3">
                  <span className="text-dark" />
                  {title}
                </h1>
                <h4 className="mb3">Job Details.</h4>
                <ul className="list-group">
                  <li className="list-group-item">Company: {company}</li>
                  <li className="list-group-item">Type: {type}</li>
                  <li className="list-group-item">Location: {location}</li>
                  <li className="list-group-item">
                    Created At:{" "}
                    <Moment format="MMM Do YY HH:mm">{created_at}</Moment>
                  </li>
                </ul>
                <hr />
                <Link to="/" className="btn btn-secondary">
                  {" "}
                  Back to Jobs.
                </Link>
              </div>
            );
          }}
        </Query>
      </Fragment>
    );
  }
}

export default Job;
