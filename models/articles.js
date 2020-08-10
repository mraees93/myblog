const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
    title: {type: String, required: true},
    article: {type: String, rquired: true},
    authorName: {type: String, required: true}
})

const Articles = mongoose.model("Articles", articleSchema);

module.exports = Articles;