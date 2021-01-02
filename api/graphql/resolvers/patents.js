const db = require("../../database/db");
const constants = require("../../constants/constants");
const { queryBuilder } = require("../../database/db");

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
        .having("chemical_type_number", "=", `${typeNumber}`);
    } else {
      queryBuilder.orderBy(orderBy, isAsc ? "asc" : "desc");
    }
    queryBuilder;
  };
  const takeSkip = (queryBuilder) => {
    queryBuilder.limit(take).offset(skip);
  };
  const getCurrentPage = (totalItems, skip, take) => {
    const totalPages = Math.ceil(totalItems / take);
    const currentpage = Math.floor(skip / take);
    return { totalPages, currentpage };
  };
  try {
    let response;
    if (!filter) {
      response = await db
        .select()
        .modify(isValidTypeNumber)
        .modify(takeSkip)
        .from(constants.PANTENT_TABLE);
      responseTotal = await db
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
        .modify(takeSkip)
        .from(constants.PANTENT_TABLE);
      responseTotal = await db
        .select()
        .where("title", "like", `%${filter}%`)
        .orWhere("chemical_type", "like", `%${filter}%`)
        .orWhere("patent_number", "like", `%${filter}%`)
        .modify(isValidTypeNumber)
        .from(constants.PANTENT_TABLE);
    }
    const { currentpage, totalPages } = getCurrentPage(
      responseTotal.length,
      skip,
      take
    );
    return {
      data: response,
      totalItems: responseTotal.length,
      skip,
      take,
      currentpage,
      totalPages,
    };
  } catch (error) {
    return [];
  }
};
