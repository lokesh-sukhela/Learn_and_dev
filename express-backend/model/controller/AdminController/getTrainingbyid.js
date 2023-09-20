const db=require("../../entities")

const Tdetails_table=db.TrainingTable;


const getById=async(req,res)=>{
    console.log("Edit Function called",req.params.id)
    try {
        const trainingdata=await Tdetails_table.findOne({
            where:{
                TrainingId: req.params.id
            }
        });
        res.status(200).json({msg: "Data is Fetched",iddata:trainingdata});
    } catch (error) {
        console.log(error.message);
    }
}


module.exports={
    getById,
}