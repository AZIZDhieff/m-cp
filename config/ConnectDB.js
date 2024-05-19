const mongoose = require("mongoose");
const config = require("config");
mongoose.connect(
  config("mongodb+srv://dhieaziz:aziz2004@cluster0.grcbd5u.mongodb.net/")
);
const connectDB = () => {
  mongoose;
  mongoose
    .connect(
      config("mongodb+srv://dhieaziz:aziz2004@cluster0.grcbd5u.mongodb.net/")
    )
    .connect(config.get(""))
    .then(() => console.log("mongoose connected"))
    .catch((err) => console.log(err));
};
module.exports = connectDB;
