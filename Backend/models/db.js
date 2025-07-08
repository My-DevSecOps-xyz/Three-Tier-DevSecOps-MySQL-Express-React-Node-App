


require('dotenv').config();
const mysql = require('mysql2');

console.log('MySQL Connection Config:', {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
  // Add connection timeout and retry options

});

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  connectTimeout: 10000,
  ssl: {
    rejectUnauthorized: false // Disable SSL verification
  }
});

const connectWithRetry = () => {
  db.connect((err) => {
    if (err) {
      console.error('Failed to connect to MySQL:', err.message);
      console.log('Retrying in 5 seconds...');
      setTimeout(connectWithRetry, 5000);
      return;
    }
    console.log('Backend connected to MySQL successfully!');
  });
};

connectWithRetry();

module.exports = db;
































// require('dotenv').config();
// const mysql = require('mysql2');

// const db = mysql.createConnection({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME
//   // Add connection timeout and retry options

// });

// // db.connect((err) => {
// //   if (err) throw err;
// //   console.log('Backend connected to MySQL successfully!');
// // });

// const connectWithRetry = () => {
//   db.connect((err) => {
//     if (err) {
//       console.error('Failed to connect to MySQL:', err.message);
//       console.log('Retrying in 5 seconds...');
//       setTimeout(connectWithRetry, 5000); // Retry after 5 seconds
//       return;
//     }
//     console.log('Backend connected to MySQL successfully!'); //ytyytyyytytytytytytyytytyt
//   });
// };

// connectWithRetry();

// module.exports = db;
