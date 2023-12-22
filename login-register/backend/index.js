const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const PORT = 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

main().catch((err) => console.log(err));

async function main() {
  mongoose.connect(
    ""
  );
  console.log("db connected");
}
  
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const User = new mongoose.model("users", userSchema);

//routes
app.post("/login", async(req, res) => {
  const {email,password} = req.body;
  if ( !email || !password) {
    res.status(400).send("Required fields can't be empty");
  }

  const user = await User.findOne({email});
  if(!user){
    res.status(400).send("User doesn't exist") 
  }

  if(user.password != password){
    res.status(400).send("Password doesn't match"); 
  }

  console.log(user);
  res.status(200).send("Successfully Logged in", user)

});

app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.status(400).send("Required fields can't be empty");
  }

  let user = await User.findOne({email})
  if(user){
    res.status(400).send("User already exists")
  }

  user = new User({
    name,
    email,
    password,
  });
  await user.save();
   console.log(user);
   res.send("Successfully registered")
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
