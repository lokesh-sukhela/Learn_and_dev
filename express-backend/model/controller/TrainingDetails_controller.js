const db=require("../entities")
const Tdetails_table=db.TDetails
const Traning_details= async(req,res)=>{
    //console.log(req.body.name)

        try {
            const response = await Tdetails_table.findAll();
            res.status(200).json(response);
        } catch (error) {
            console.log(error.message);
        }
 
}
module.exports={
     Traning_details

}
