const { buildSchema } = require("graphql");
module.exports = buildSchema(`

  type Patent {
    id: ID!
    title: String!
    patent_number: String!
    chemical_type: String!
    chemical_type_number: Int!
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
    patents(filter:String, typeNumber: Int, take: Int, skip: Int, orderBy: String, isAsc: Boolean): [Patent!]!
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
