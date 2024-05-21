// import required modules
let cryptoModule=require("crypto");
let linkModule=require("../snipCore/link")
let _defined_sql_module=require("../config/db_config")

class routeModule{
    //  route to snip url 
    snip_url(req,res){
        let generate_reference=cryptoModule.randomBytes(3).toString("hex");
        let define_link_class=new linkModule(req.query.originalUrl,generate_reference);
        // define sql query
        let sql_query=`insert into userlink value('${define_link_class.id}','${define_link_class.reference}','${define_link_class.original_link}')`
        _defined_sql_module.query(sql_query,(err,result)=>{
            if(err){
                throw new Error(err)
            }
            if(result){
                res.json({msg:'link_creation_successful',reference:define_link_class.reference})
            }
        })
    }

    //  route to get original url 
    getOriginalUrl(req,res){
        let query=`select * from userlink where reference_link='${req.params.reference_id}'`
        _defined_sql_module.query(query,(err,result)=>{
            if(err){
                throw new Error(err)
            }
            if(result){
                res.json(result[0])
            }
        })
    }

    // get all data 
    getAllData(req,res){
        let query=`select * from userlink`
        _defined_sql_module.query(query,(err,result)=>{
            if(err){
                throw new Error(err)
            }
            if(result){
                res.json({msg:'successful', data:result})
            }
    })
}

}

//  export modules 
module.exports=routeModule;