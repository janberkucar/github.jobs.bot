const express = require('express');
const graphqlHTTP = require('express-graphql');
const cors = require('cors');
const schema = require('./schema.js');

const app = express();

// Allowing the origin. (cors)
app.use(cors());

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`server başladı ${PORT}`));