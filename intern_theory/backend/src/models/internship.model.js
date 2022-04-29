const mongoose = require("mongoose");


const internshipSchema = new mongoose.Schema(
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


 module.exports = mongoose.model("internship", internshipSchema);

//  {
//     img : "https://assets.interntheory.com/uploads/company/logos/3cdd6cced1a455d7623c5319436acdcf3408009b.jpg",
//     title : "Business Development Intern",
//     name : "Finbricks",
//     time : "Full Time Internship",
//     industry : "Real Estate",
//     city : "Mumbai",
//     Stipend: "Stipend: 10000 - 12000 per month",
//     weeks : "1 week"   
// },