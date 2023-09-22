const db=require("../../entities")

const Tdetails_table=db.TrainingTable;


const edittraining=async(req,res)=>{
    console.log("update Function called",req.params.id)
    try {
        await Tdetails_table.update(req.body,{
            where:{
                TrainingId: req.params.id
            }
        });
        res.status(200).json({msg: "User Updated"});
    } catch (error) {
        console.log(error.message);
    }
}


module.exports={
    edittraining,
}
