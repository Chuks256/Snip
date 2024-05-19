
let snip_core_module=require("../snipCore/snip")


class routeModule{
    constructor(){
    }
    //  route to snip url 
    snip_url(req,res){
        let define_snip_module=new snip_core_module();
        let original_url=req.body.originalUrl;
        let snip_defined_module=define_snip_module.create_short_link(original_url);
        res.json(snip_defined_module);
    }

    //  route to get original url 
    getOriginalUrl(req,res){
        let define_snip_module=new snip_core_module();
        let url_reference_id=req.params.reference_id;
        let snip_defined_module=define_snip_module.getOriginalLinkByReference(url_reference_id);
        res.json(snip_defined_module);
    }
}

//  export modules 
module.exports=routeModule;