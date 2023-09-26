const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//change password before you add it and test
const db = mysql.createConnection(
    {
        host: '127.0.0.1',
        user: 'root',
        password:'Meichih04!*',
        database: 'employee_db'
    },
    console.log(`Connected to the employee_db database`)
)

// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
  });
  
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
  