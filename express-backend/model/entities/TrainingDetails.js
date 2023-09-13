const { text } = require("express");

module.exports=(sequelize,DataTypes)=>{
    const TDetails=sequelize.define("TrainingDetails",{
       TrainingId:{
           type:DataTypes.INTEGER,
           primaryKey: true,
           autoIncrement: true
       },
       TrainingTitle:{
           type:DataTypes.STRING,
           allownull:false
       },
       SkillTitle:{
          type:DataTypes.STRING,
          allownull:false
       },
       SkillCategory:{
           type:DataTypes.STRING,
           allownull:false
       },
       StartDate:{
        type:DataTypes.DATE,
        allownull:false
      
       },
       EndDate:{
        type:DataTypes.DATE,
        allownull:false
    },
     Description: {
        type:DataTypes.STRING,
        allownull:false
    },
    TrainingMode:{
        type:DataTypes.STRING,
        allownull:false
    },
    MeetingLink:{
        type:DataTypes.STRING,
        allownull:true
    },
    MaxLimit:{
        type:DataTypes.INTEGER,
        allownull:false
    },
  
    },
    {timestamp:false,
        createdAt: false,
        updatedAt:false}
    )
    return TDetails;
}
   