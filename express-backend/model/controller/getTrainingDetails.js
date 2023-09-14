const db=require("../entities")

const Tdetails_table=db.TrainingTable;
const getTrianing_details= async(req,res)=>{
    
        try{
       
            const newTraining = await Tdetails_table.findAll();
            if(newTraining){
                res.status(200).json({ message: "data Fetched" });
            }
            else{

                res.status(404).json({message:"data Not Fetched"});
            }
          
        }
        catch (error) {
            console.log(error.message);
        }
    
}

module.exports={
    getTrianing_details,
}