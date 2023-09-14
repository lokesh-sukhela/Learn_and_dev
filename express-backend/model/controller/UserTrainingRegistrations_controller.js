const db=require("../entities")
const UserTR_table=db.UserTRegTable
const Create_UserTrainingDetails= async(req,res)=>{
    console.log(req.body.id)

    if(req.body.TId && req.body.email){
        const result=await UserTR_table.create({
            name:req.body.TId,
            email:req.body.email
        })
        console.log(result);
        alert("Registration Successful"); 
    } else {
    alert("Registration Unsuccessful");
   }
}

module.exports={
    Create_UserTrainingDetails

}

