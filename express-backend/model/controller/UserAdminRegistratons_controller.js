const db=require("../entities")
const UA_table=db.UserTR
const create_user_admin= async(req,res)=>{
    console.log(req.body.name)
   // req.body.password

   if(req.body.name && req.body.password && req.body.email){
   
        const result=await UA_table.create({
            name:req.body.name,
            email:req.body.email,
            password:req.body.password
        })
        console.log(result);
        
        alert("Registration Successful");
      
   }else{
    alert("Registration Unsuccessful");
   }
 

}
module.exports={
    create_user_admin
}