const db = require('../../database/db')
const constants = require("../../constants/constants");

module.exports = async ({filter, typeNumber=null}) => {

  const isValidTypeNumber = (queryBuilder) => {
    if(typeNumber !== null ) {
          queryBuilder.groupBy('id').orderBy('id', 'asc').having('chemical_type_number', '=', `${typeNumber}`)
      }
    }
  try {
    let response
    if (!filter) {
      console.log(db.select().modify(isValidTypeNumber).from(constants.PANTENT_TABLE).toSQL())
      response = await db.select().modify(isValidTypeNumber).from(constants.PANTENT_TABLE)
    } else {
      console.log(db.select().modify(isValidTypeNumber).from(constants.PANTENT_TABLE).toSQL())
      response = await db
        .select()
        .where(
          'title', 'like', `%${filter}%`
        )
        .orWhere(
          'chemical_type', 'like', `%${filter}%`
        )
        .orWhere(
          'patent_number', 'like', `%${filter}%`
        )
        .modify(isValidTypeNumber)
        .from(constants.PANTENT_TABLE);
    }
    return response;
  } catch (error) {
    return []
  }
}