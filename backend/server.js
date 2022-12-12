const express = require("express");
const mongoose = require("mongoose");
const app = express();
// const bodyParser = require("body-parser");
//cors [to share data with frontend]
const cors = require("cors");
app.use(cors());

//body parser
app.use(express.json());

//routes
const user = require("./route/user");

const port = process.env.PORT || 8080;

//url encoded password is required [@ converted to %40]
const uri =
  "mongodb+srv://chetan-lohkare:8mongodb%40cl@cluster0.ytmdmgj.mongodb.net/?retryWrites=true&w=majority";

//Connect to mongodb
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/user", user);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
