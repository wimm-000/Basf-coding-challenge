const db = require('../../database/db')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const constants = require("../../constants/constants");

module.exports = async ({ username, password }) => {
  const response = await db("user")
    .where({ username })
    .first();
  if (!response) {
    throw new Error("Invalid data");
  }
  const isEqual = await bcrypt.compare(password, response.password);
  if (!isEqual) {
    throw new Error("Invalid data");
  }
  const token = jwt.sign({ userId: response.id, username }, constants.SECRET, {
    expiresIn: "1h"
  });
  return {
    userId: response.id,
    token,
    tokenExpiration: 1
  };
};
