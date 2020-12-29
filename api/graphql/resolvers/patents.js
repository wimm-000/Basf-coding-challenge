const db = require("../../database/db");
const constants = require("../../constants/constants");

module.exports = async ({
  filter,
  skip = 0,
  take = 100,
  typeNumber = null,
  orderBy = "id",
  isAsc = true,
}) => {
  const isValidTypeNumber = (queryBuilder) => {
    if (typeNumber !== null) {
      queryBuilder
        .groupBy("id")
        .orderBy(orderBy, isAsc ? "asc" : "desc")
        .having("chemical_type_number", "=", `${typeNumber}`)
        .limit(take)
        .offset(skip);
    } else {
      queryBuilder
        .orderBy(orderBy, isAsc ? "asc" : "desc")
        .limit(take)
        .offset(skip);
    }
    queryBuilder;
  };
  try {
    let response;
    if (!filter) {
      response = await db
        .select()
        .modify(isValidTypeNumber)
        .from(constants.PANTENT_TABLE);
    } else {
      response = await db
        .select()
        .where("title", "like", `%${filter}%`)
        .orWhere("chemical_type", "like", `%${filter}%`)
        .orWhere("patent_number", "like", `%${filter}%`)
        .modify(isValidTypeNumber)
        .from(constants.PANTENT_TABLE);
    }
    return response;
  } catch (error) {
    return [];
  }
};
