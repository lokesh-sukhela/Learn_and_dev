const db=require("../entities")

const Tdetails_table=db.TrainingTable;


const edittraining=async(req,res)=>{
    try {
        const response = await Tdetails_table.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

module.exports={
    edittraining,
}
