const db = require('../../database/db')
const constants = require("../../constants/constants");

module.exports = async ({id}, req) => {
  if (!req.isAuth) {
    throw new Error("Unathentificated");
  }
  try {
    let response
    if (!id) {
      response = await db.select().from(constants.USER_TABLE)
    } else {
      response = await db
        .select()
        .where({
          id
        })
        .from(constants.USER_TABLE);
    }
    const editedResponse = response.map(user => ({ ...user, password: null }))
    return editedResponse
  } catch (error) {
    throw error
  }
}
