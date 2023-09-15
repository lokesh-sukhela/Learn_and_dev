const db=require("../entities")

const Tdetails_table=db.TrainingTable;


const edittraining=async(req,res)=>{
    try {
        await Tdetails_table.update(req.body,{
            where:{
                id: req.params.id
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
