module.exports=(sequelize,DataTypes)=>{
 const Admin=sequelize.define("AdminRegistration",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name:{
        type:DataTypes.STRING,
        allownull:false
    },
    email:{
       type:DataTypes.STRING,
       unique:true,
       allownull:false
    },
    password:{
        type:DataTypes.STRING,
        allownull:false
    }
 }
 )
 return Admin;
}
