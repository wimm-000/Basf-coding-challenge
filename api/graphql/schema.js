const { buildSchema } = require('graphql')
module.exports = buildSchema(`

  type Patent {
    id: ID!
    name: String!
    price: Float!
    is_active: Boolean
  }

  type User {
    id: ID!
    username: String!
    password: String
    cdate: String
    is_active: Boolean
  }

  type AuthData {
    userId: ID!
    token: String!
    tokenExpiration: Int!
  }

  type rootQuery {
    patents(id: Int): [Patent!]!
    login(username: String!, password: String!): AuthData
  }

  input UserInput {
    username: String!
    password: String!
  }

  type rootMutation {
    createUser(userInput: UserInput): User
    editUser(userInput: UserInput, id: Int): User
    deleteUser(id: Int): Boolean
  }

  schema {
    query: rootQuery
    mutation: rootMutation
  }

`);