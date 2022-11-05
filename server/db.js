const oracledb = require('oracledb');


async function run() {

    let connection;
  
      connection = await oracledb.getConnection({ user: "usuario", password: "senha", connectionString: "localhost/xe" });
      console.log("Successfully connected to Oracle Database");
  

}
  
  run();