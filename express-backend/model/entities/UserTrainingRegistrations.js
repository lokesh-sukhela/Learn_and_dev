module.exports=(sequelize,DataTypes)=>{
    const UserTR = sequelize.define("UserTrainingRegistrations",{
       TId:{
           type:DataTypes.INTEGER,
           primaryKey: true,
       },

       UserEmail:{
          type:DataTypes.STRING,
          unique:true,
          allownull:false
       },
       RegiseteredOrNot:{
           type:DataTypes.BOOLEAN,
           default:false
          
       }
    }
    )
    return UserTR;
   }
   