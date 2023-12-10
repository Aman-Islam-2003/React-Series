const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const PORT = 8080;

app.use(cors());
app.use(express.urlencoded());
app.use(express.json());

main().catch((err) => console.log(err));

async function main() {
  mongoose.connect(
    "mongodb+srv://farrukhadeel:pps993icp956@cluster0.ysuiv.mongodb.net/demo"
  );
  console.log("db connected");
}

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
});

const User = mongoose.model("users", userSchema);

app.post("/demo", async (req, res) => {
  console.log(req.body);
  const { username, password } = req.body;
  if (!username || !password) {
    res.status(500).send("Required fields can't be empty");
  }

  let user = new User({
    username,
    password,
  });

  const doc = await user.save();
  console.log(doc);
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
