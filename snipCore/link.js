let cryptoModule=require("crypto");

class link{
    constructor(original_link="",reference=""){
        this.id=cryptoModule.randomBytes(5).toString("hex");
        this.original_link=original_link;
        this.reference=reference;
    }
}

module.exports=link;