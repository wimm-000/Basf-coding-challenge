const db = require("../../database/db")
const bcrypt = require('bcryptjs')
const constants = require("../../constants/constants");

module.exports = async (args, req) => {
  if (!req.isAuth) {
    throw new Error("Unathentificated");
  }
  try {
    const userExists = await db.select().from(constants.USERTABLE).where('username', args.userInput.username).first()
    if (userExists) {
      return userExists
    }
    const hashedPassword = await bcrypt.hash(args.userInput.password, 12)
    args.userInput.password = hashedPassword
    const response = await db.insert(args.userInput).into(constants.USERTABLE)
    return {
      ... args.userInput,
      id: response[0],
    };
  } catch (error) {
    throw error 
  }
}