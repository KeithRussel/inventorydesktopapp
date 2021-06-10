const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const dbPath = path.resolve(__dirname, '../config/sqlite/products.db');

const connectDB = async () => {
  try {
    // open database in memory
    // let db = new sqlite3.Database('../../../sqlite/products.db');
    let db = new sqlite3.Database(dbPath);

    let sql = `SELECT Name name from tbl1 ORDER BY name`;

    db.all(sql, [], (err, rows) => {
      if (err) {
        throw err;
      }
      rows.forEach((row) => {
        console.log(row.name);
      });
    });

    // close the database connection
    db.close((err) => {
      if (err) {
        return console.error(err.message);
      }
      console.log('Close the database connection.');
    });
  } catch (error) {
    console.error(`Error: ${error.message}`.trimEnd.underline.bold);
    process.exit(1);
  }
};

module.exports = connectDB;
