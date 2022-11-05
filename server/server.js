const express = require("express");
const app = express();
const port = 3000;
const oracledb = require('oracledb');
const defaultpool = {
    user: "usuario",
    password: "senha",
    connectString: "localhost/XE"
};


async function run() {
    
    let connection = await oracledb.getConnection(defaultpool);
      console.log("Successfully connected to Oracle Database");
  
}

async function insert(){
    let connection;
    connection = await oracledb.getConnection(defaultpool);
    try{

        const result = connection.execute(
            `BEGIN
            :total_dia := atendi_animal(:p1,:p2);
            END;`,
            {
                p1:  'Tirry', // Bind type is determined from the data.  Default direction is BIND_IN,
                p2:'Guilherme', 
                total_dia: { dir: oracledb.BIND_OUT, type: oracledb.NUMBER}
            });
            console.log(result.outBinds);
            
    } catch(error) {
        alert(error);
    }
    }

        app.use(express.static('public'))

        app.get('/insert', (req, res) => {
            insert();
            res.status(200).send('<h1>ok</h1>')
        });
        
app.listen(port, () => {
    console.log('running express');
    run();
});