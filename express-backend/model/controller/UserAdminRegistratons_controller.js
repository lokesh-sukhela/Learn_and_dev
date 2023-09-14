const db = require("../entities");
const UA_table = db.UserAdminRegTable;
const create_user_admin = async (req, res) => {
  console.log(req.body.name);

  const { name,email, password } = req.body;

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
    res.status(200).json({ message: "All fields are mandatory ; Please fill it."});
  }
};

module.exports = {
  create_user_admin,
};

