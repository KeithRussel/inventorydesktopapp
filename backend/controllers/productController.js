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
  let sql = 'SELECT * from tbl1 ORDER BY prod_id';
  db.all(sql, [], (err, rows) => {
    if (err) {
      throw err;
    }
    console.log(rows);
    res.json(rows);
  });
});

// @desc    Create a product
// @route POST /api/products
// @access Public
const createProducts = asyncHandler(async (req, res) => {
  // db.run('CREATE TABLE tbl1(name, price');

  let sql = 'INSERT INTO tbl1(prod_id, name, price) VALUES(?, ?, ?)';

  db.run(
    sql,
    [req.body.prod_id, req.body.name, req.body.price],
    (err, rows) => {
      if (err) {
        throw err;
      }
      // get the last insert id
      console.log('New product has been added into database with ID');
      res.json(rows);
    }
  );
});

module.exports = { getProducts, createProducts };
