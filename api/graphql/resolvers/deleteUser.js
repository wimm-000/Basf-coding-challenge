const db = require('../../database/db')
const constants = require('../../constants/constants')

module.exports = async ({id}, req) => {
  if (!req.isAuth) {
    throw new Error("Unathentificated");
  }
  try {
    const response = await db(constants.USERTABLE)
      .where("id", id)
      .del();
    return response
  } catch (error) {
    throw error
  }
}