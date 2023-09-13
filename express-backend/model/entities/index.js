const dbconfig=require("../../config/dbconfig");
const sql=require("pg");
const {Sequelize,DataTypes}=require("sequelize");
const db={};

const client= new sql.Client({ user: dbconfig.USER, password: dbconfig.PASSWORD })


// Connect to the PostgreSQL database
client.connect()
  .then(() => {
    console.log('Connected to PostgreSQL DATABASE Successfully');
    // You can start executing queries here
  })
  .catch((err) => {
    console.error('Error connecting to PostgreSQL database:', err);
  });
    

 
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

db.UserAdminReg=require("./UserAdminRegistrations")(sequelize,DataTypes);


db.sequelize.sync({force:false}).then(()=>{
    console.log("re-sync-done")
})

module.exports=db