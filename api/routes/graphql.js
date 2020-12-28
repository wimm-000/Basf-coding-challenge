const graphqlHttp = require('express-graphql').graphqlHTTP
const schema = require('../graphql/schema')
const patentsResolver = require('../graphql/resolvers/patents')
const usersResolver = require('../graphql/resolvers/users')
const editUserResolver = require('../graphql/resolvers/editUser')
const deleteUserResolver = require('../graphql/resolvers/deleteUser')
const createUserResolver = require('../graphql/resolvers/createUser')
const login = require("../graphql/resolvers/login");

module.exports = graphqlHttp({
  schema: schema,
  rootValue: {
    patents: patentsResolver,
    users: usersResolver,
    createUser: createUserResolver,
    editUser: editUserResolver,
    deleteUser: deleteUserResolver,
    login
  },
  graphiql: true
});