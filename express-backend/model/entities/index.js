const dbconfig=require("../../config/dbconfig");
const sql=require("mysql2/promise");
const {Sequelize,DataTypes}=require("sequelize");
const db={};

sql.createConnection({ user: dbconfig.USER, password: dbconfig.PASSWORD })
    .then(()=>{
        console.log("database connected successfully")
    })

 
const sequelize=new Sequelize(
    dbconfig.DATABASE,
    dbconfig.USER,
    dbconfig.PASSWORD,{
        dialect:dbconfig.DIALECT,
        host:dbconfig.HOST
    }
);

(async () => {
    try {
      await sequelize.authenticate();
      console.log('Connection has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
  })();

db.sequelize=sequelize;

db.admin=require("./adminregistration")(sequelize,DataTypes);

db.sequelize.sync({force:false}).then(()=>{
    console.log("re-sync-done")
})

module.exports=db