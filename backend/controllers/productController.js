const sqlite3 = require('sqlite3').verbose();
const { open } = require('sqlite');
const path = require('path');
const dbPath = path.resolve(__dirname, '../config/sqlite/products.db');
const asyncHandler = require('express-async-handler');

const db = new sqlite3.Database(dbPath);

// @desc    Fetch all products
// @route GET /api/products
// @access Public
const getProducts = asyncHandler(async (req, res) => {
  //   res.send('GET PRODUCTS');
  //   const db = await open({
  //     filename: dbPath,
  //     driver: sqlite3.Database,
  //   });

  //   await db.run(`SELECT Name name from tbl1 ORDER BY name`);
  let sql = 'SELECT * from tbl1';
  db.all(sql, [], (err, rows) => {
    if (err) {
      throw err;
    }
    console.log(rows);
    res.json(rows);
  });

});

module.exports = { getProducts };
