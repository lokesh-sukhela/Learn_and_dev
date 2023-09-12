/*const db=require("../entities")
const UA_table=db.admin
const create_user_admin= async(req,res)=>{
    console.log(req.body.name)
   // req.body.password

   const{name,email,password}=req.body;

   if(req.body.name && req.body.password && req.body.email){
   

    const usercheck = await UA_table.findOne(
        {email}
    )

    if (usercheck===email){
        res.status(200).send({message:"User already exist!"})
    }else{
        const result=await UA_table.create({
            FullName:name,
            Email:email,
            Password:password
        })
        console.log(result);
        res.status(200).send({message:"User added "})

    }


      
   }else{
    alert("Registration Unsuccessful");
   }
 

}
module.exports={
    create_user_admin
}*/

const db = require("../entities");
const UA_table = db.UserAdminReg;

const create_user_admin = async (req, res) => {
  console.log(req.body.name);

  const { name, email, password } = req.body;

  if (name && password && email) {
    try {
      // Check if a user with the same email already exists in the database
      const existingUser = await UA_table.findOne({ where: { Email: email } });
        console.log(existingUser,"BAckend signup")
      if (existingUser) {
        res.status(200).json({ message: "User already exists!" });
      } else {
        // Create a new user in the database
        const newUser = await UA_table.create({
          FullName: name,
          Email: email,
          Password: password,
        });

        console.log(newUser);
        res.status(200).json({ message: "User added" });
      }
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ message: "Internal server error" });
    }
  } else {
    res.status(200).json({ message: "Registration Unsuccessful"});
  }
};

module.exports = {
  create_user_admin,
};

