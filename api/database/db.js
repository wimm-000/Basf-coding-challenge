const db = require("knex")({
  client: "sqlite3",
  useNullAsDefault: true,
  connection: {
    filename: "./database/db.sqlite3"
  }
});

module.exports = db
