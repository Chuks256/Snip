
let sql_module=require("mysql2");

//  define sql environment params 
let sql_env_params={
    uri:"mysql://avnadmin:AVNS_eD1DYAE6cdBRmxaIc8-@mysql-b72bfe8-alexanderchuks310-041a.d.aivencloud.com:23928/defaultdb?ssl-mode=REQUIRED"
}

// create clustered pool connection
let define_db_connection=sql_module.createConnection(sql_env_params);
define_db_connection.connect(err =>{
    if(err){
        throw new Error(err)
    }
        console.log("successfully connected to database")
})

module.exports=define_db_connection;