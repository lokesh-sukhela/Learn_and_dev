const db=require("../entities")
const UA_table=db.UserTR
const create_user_admin= async(req,res)=>{
    console.log(req.body.name)
   // req.body.password

   const{name,email,password}=req.body;

   if(req.body.name && req.body.password && req.body.email){
   
        const result=await UA_table.create({
            FullName:name,
            Email:email,
            Password:password
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