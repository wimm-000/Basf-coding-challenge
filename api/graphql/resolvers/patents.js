const db = require('../../database/db')
const constants = require("../../constants/constants");

module.exports = async ({id}) => {
  // Find all restaurants
  try {
    let response
    if (!id) {
      response = await db.select().from(constants.PANTENT_TABLE);
    } else {
      response = await db
        .select()
        .where({
          id
        })
        .from(constants.PANTENT_TABLE);
    }
    return response;
  } catch (error) {
    return []
  }
}