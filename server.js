const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const PORT = process.env.PORT || 5000;

require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const uri = "mongodb+srv://user:@users.y6fgk.mongodb.net/blog?retryWrites=true&w=majority";
mongoose.connect(process.env.MONGODB_URI || uri, {
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

if (process.env.NODE_ENV === "production") {
  app.use(express.static( "client/build" ));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html")); //relative path
  });
}

// to start server
app.listen(PORT, () =>
console.log("server started on PORT: ${PORT}"))