const express = require("express");
const app = express();
const port = 3000;

const oracledb = require('oracledb');

const connection = oracledb.getConnection({ user: "usuario", password: "senha", connectionString: "localhost/xepdb1" });

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.status(200).send('<h1>ok</h1>')
});

app.listen(port, () => {
    console.log('running express');
});