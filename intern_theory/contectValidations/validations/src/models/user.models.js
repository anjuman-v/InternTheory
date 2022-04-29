const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    phoneNumber: { type: Number,  required: true, min:10 },
    subject: { type: String, required: true },
    massege:{ type: String, required: true , minlength:3}
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("user", userSchema);
