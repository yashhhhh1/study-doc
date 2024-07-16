const Mongoose = require("mongoose");

const MONGODB_URI = process.env.MONGODB_URI;
const connectDB = async () => {
  await Mongoose.connect(MONGODB_URI, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
  })
  console.log("MongoDB Connected")
}
module.exports = connectDB