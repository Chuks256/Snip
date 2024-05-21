// import required modules
let cryptoModule=require("crypto");
let fsModule=require("fs")
let linkModule=require("./link")

//  define snip class 
class snip_core{
    constructor(){
        this.sanitize_log();
    }

    sanitize_log(){
        let get_data=fsModule.readFileSync("./snip_log.json",{encoding:"utf-8"});
        if(get_data===""){
            fsModule.writeFileSync("./snip_log.json",JSON.stringify([],"",3),{encoding:"utf-8"})
        }
    }

    get_snip_log_data(){
        let get_data=fsModule.readFileSync("./snip_log.json",{encoding:"utf-8"});
        return get_data;
    }

    save_new_data(data){
        let get_data=JSON.parse(this.get_snip_log_data())
            get_data.push(data)
            fsModule.writeFileSync("./snip_log.json",JSON.stringify(get_data,"",3),{encoding:"utf-8"})
            return true 
    }

    //  function for creating short link 
    create_short_link(link=""){
        let generate_reference=cryptoModule.randomBytes(3).toString("hex");
        let define_link_class=new linkModule(link,generate_reference);
        let saveData=this.save_new_data(define_link_class);
        if(saveData===true){
            return {msg:'link_creation_successful',reference:generate_reference}
        }
    }

    //  function for getting original link based on reference id 
    getOriginalLinkByReference(reference=""){
        let get_data=this.get_snip_log_data();
        for(let original_link_reference of JSON.parse(get_data)){
            if(original_link_reference.reference==reference){
                return {msg:'successful' ,link:original_link_reference.original_link}
            }
           if(original_link_reference.reference==undefined){
            return {msg:'failed'}
           }
        }
    }

    get_all_links(){
        let get_data=this.get_snip_log_data();
        return JSON.parse(get_data);
    }
}


module.exports=snip_core;
