const db=require("../entities")
const admin=db.admin
const create_admin= async(req,res)=>{
    console.log(req.body.name)
   // req.body.password

   if(req.body.name && req.body.password && req.body.email){
   
        const result=await admin.create({
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
    create_admin
}