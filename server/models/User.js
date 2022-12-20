const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
      min: 3,
      max: 200,
      unique: true,
    },
    email: {
      type: String,
      require: true,
      max: 60,
      unique: true,
    },
    password: {
      type: String,
      require: true,
      min: 5,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
