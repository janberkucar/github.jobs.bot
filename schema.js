// Where all our GraphQL stuff goes.
const axios = require("axios");

// Implements that we use on GraphQL
const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLSchema
} = require("graphql");

// Creating our Type. -----------------
const JobType = new GraphQLObjectType({
  name: "Job",
  fields: () => ({
    id: {
      type: GraphQLID
    },
    type: {
      type: GraphQLString
    },
    created_at: {
      type: GraphQLString
    },
    location: {
      type: GraphQLString
    },
    company: {
      type: GraphQLString
    },
    title: {
      type: GraphQLString
    }
  })
});

// Root Query, end point that resolve -------------------------------------
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    // MULTIPLE JOBS TYPE
    jobs: {
      type: new GraphQLList(JobType),
      resolve(parent, args) {
        // Actually where we get data. Using AXIOS to get third-party-data
        return axios
          .get("https://jobs.github.com/positions.json?location=new+york")
          .then(res => res.data);
      }
    },

    // SINGLE JOB TYPE
    job: {
      type: JobType,
      args: {
        id: {
          type: GraphQLID
        }
      },
      resolve(parent, args) {
        // Request to get job.
        return axios
          .get(`https://jobs.github.com/positions/${args.id}.json`)
          .then(res => res.data);
      }
    }
  }
});

// Exporting the GraphQLSchema --------------------------------------------
module.exports = new GraphQLSchema({
  query: RootQuery
});