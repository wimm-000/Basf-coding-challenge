const db = require('../../database/db')
const constants = require("../../constants/constants");

module.exports = async (args, req) => {
  if (!req.isAuth) {
    throw new Error("Unathentificated");
  }
  try {
    const response = await db(constants.USERTABLE)
      .update(args.userInput)
      .where({id: args.id});
    return {
      id: args.id,
      username: args.userInput.name,
      password: null
    }
  } catch (error) {
    throw error
  }
}
