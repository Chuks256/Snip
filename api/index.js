
//  import rquired module 
let route_Module=require("../routeModule/api_routes");
let express=require("express");
let app=express();
let cors=require('cors')
let bodyParser=require("body-parser");

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.json());

// define route module 
let defined_route_module=new route_Module();

//  define api routes 
app.get("/api/snip_url",defined_route_module.snip_url);
app.get("/api/getOriginalUrl/:reference_id",defined_route_module.getOriginalUrl);
app.get("/api/test",async(req,res)=>{res.json("api is working fine")} )

// config api server 
app.listen(4005,async()=>{
    console.log("snip api server is running")
})