const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const uri = "mongodb+srv://user:user@users.y6fgk.mongodb.net/blog?retryWrites=true&w=majority";
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true  
})
.then(() => {
  console.log("mongoDB connected")
})
.catch(err => console.log(err))

const articlesRouter = require('./routes/articles');
app.use('/articles', articlesRouter);

app.listen(5000, () =>
console.log("server started on port 5000"));