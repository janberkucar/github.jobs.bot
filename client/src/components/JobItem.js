import moment from "moment";
import React from "react";
import classNames from "classnames";

var now = moment();
now = now.month() + 1;

console.log(now);

export default function JobItem({
  job: { title, company, type, location, created_at, id }
}) {
  return (
    <div className="card cardbody mb-3">
      <div className="row">
        <div className="col-md-9">
          <h3>
            {" "}
            <b>Job --</b>{" "}
            <span
              className={classNames({
                "text-success": new Date(created_at).getMonth() === now,
                "text-danger": !(new Date(created_at).getMonth() !== now)
              })}
            >
              {" "}
              {title}{" "}
            </span>{" "}
          </h3>
          <h5>
            <b>Company --</b> {company}
          </h5>
        </div>
        <div className="col-md-4">
          <button className="btn btn-secondary"> Job Details</button>
        </div>
      </div>
    </div>
  );
}
