const sqlite3 = require('sqlite3').verbose();

// open database in memory
let db = new sqlite3.Database(
  '../../../sqlite/products.db',
  sqlite3.OPEN_READWRITE,
  (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Connected to the in-memory SQlite database.');
  }
);

db.serialize(() => {
  db.each(
    `SELECT prod_id as id,
                  name as name
           FROM tbl1`,
    (err, row) => {
      if (err) {
        console.error(err.message);
      }
      console.log(row.id + '\t' + row.name);
    }
  );
});

// close the database connection
db.close((err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Close the database connection.');
});
