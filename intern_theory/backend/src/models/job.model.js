const mongoose = require("mongoose");


const jobSchema = new mongoose.Schema(
    {
        img: { type: String, required: true },
        title: { type: String, required: true },
        name: { type: String, required: true },
        time: { type: String, required: true },
        industry : { type: String, required: true},
        city : { type: String, required: true},
        Stipend : { type: String, required: true},
        weeks : { type: String, required: true}
    },
    {
      versionKey: false,
      timestamps: true,
    }
  );


 module.exports = mongoose.model("job", jobSchema);