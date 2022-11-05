const express = require("express");
const app = express();
const port = 3000;


app.use(express.static('public'))

app.get('/', (req, res) => {
    res.status(200).send('<h1>ok</h1>')
});

app.listen(port, () => {
    console.log('running express');
});