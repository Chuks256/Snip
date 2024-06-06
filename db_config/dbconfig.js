require("dotenv").config();
let sql_module=require("mysql2");

// create clustered pool connection
// process.env.URI

const db_config={
    user:"root",
    host:"localhost",
    database:"defaultdb",
    password:"root",
    port:3306
}

let define_db_connection=sql_module.createConnection(process.env.URI);
define_db_connection.connect(err =>{
    if(err){
        throw new Error(err)
    }
        console.log("successfully connected to database")
})

module.exports=define_db_connection;