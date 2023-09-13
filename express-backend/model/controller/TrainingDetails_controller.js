const db=require("../entities")
const Tdetails_table=db.TDetails
const Traning_details= async(req,res)=>{
    const { trainingname,skilltitle,skillcategory,startDateAndTime,endDateAndTime,description } = req.body;
    if(trainingname && skilltitle && skillcategory && startDateAndTime && endDateAndTime && description){
        const newTraining = await UA_table.create({
            TrainingTitle:trainingname,
            SkillTitle:skilltitle,
            SkillCategory:skillcategory,
            StartDate:startDateAndTime,
            EndDate:endDateAndTime,
            Description:description
        });
    
            try {
                const response = await Tdetails_table.findAll();
                res.status(200).json(response);
            } catch (error) {
                console.log(error.message);
            }
    }
}
module.exports={
     Traning_details

}
