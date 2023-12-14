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
    "mongodb+srv://farrukhadeel:pps993icp956@cluster0.ysuiv.mongodb.net/demo"
  );
  console.log("db connected");
}
  
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const User = mongoose.model("users", userSchema);

//routes
// app.post("/login", (req, res) => {
//   res.send("Success");
// });

app.post("/register", async (req, res) => {
  const { name, email, password, reEnterPassword } = req.body;
  if (!name || !email || !password || !reEnterPassword) {
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
    reEnterPassword,
  });
  await user.save();
  console.log(user)
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
