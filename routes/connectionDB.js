const mongoose = require("mongoose");
//mongoose.connect("mongodb://localhost:27017/myLocalMongoDB");
mongoose.connect("mongodb://adminUser:mouhssine1978@ds249839.mlab.com:49839/integrify_db");
// Define schema
const schema = mongoose.Schema;

const schemaModal = schema({
  firstName: String,
  lastName: String,
  title: String,
  nationality: String,
  src: String,
  alt: String,
  skills: [String],
  whySofterDeveloper: String,
  longTermVision: String,
  motivatesMe: String,
  favoriteQuote: String,
  joinedOn: String,
  versionKey: false
});

const students = mongoose.model("students", schemaModal);

module.exports = students;