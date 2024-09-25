const express = require('express');
const mysql = require('mysql');
const dotenv = require('dotenv');


dotenv.config();

const app = express();

//variables de la bdd
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});


//try connection a la bdd
db.connect((err) => {
    if (err) {
        console.error('Connexion à la bdd impossible', err);
    }
    else{
        console.log('Connection a la bdd accomplie');
    }
});

app.use(express.json());

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log("Server en cours d'execution ");
});
