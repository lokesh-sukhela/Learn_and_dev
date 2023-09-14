const db=require("../entities")

const Tdetails_table=db.trainingDetails;
const Traning_details= async(req,res)=>{
    const{  trainingname,
            skilltitle,
            skillcategory,
            startDateAndTime,
            endDateAndTime,
            description,
            mode,
            Link,
            count
         } = req.body;
    if(trainingname && skilltitle && skillcategory && startDateAndTime && endDateAndTime && description && mode && Link && count){
        try{
            console.log("data came")
            const newTraining = await Tdetails_table.create({
                TrainingTitle:trainingname,
                SkillTitle:skilltitle,
                SkillCategory:skillcategory,
                StartDate:startDateAndTime,
                EndDate:endDateAndTime,
                Description:description,
                MaxLimit:count,
                TrainingMode:mode,
                MeetingLink:Link
            });
            res.status(200).json({ message: "Training added" });
        }
        catch (error) {
            console.log(error.message);
        }
    } else{
        res.status(200).json({messages:"Please fill all the fields"});
    }
}

module.exports={
     Traning_details,
}
