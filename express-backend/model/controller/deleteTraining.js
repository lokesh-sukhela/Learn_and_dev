const db=require("../entities")

const Tdetails_table=db.TrainingTable;

const deletetraining=async(req,res)=>{

    try {
        await Tdetails_table.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "User Deleted"});
    } catch (error) {
        console.log(error.message);
    }

}

module.exports={
    deletetraining,
}