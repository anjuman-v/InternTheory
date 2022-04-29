const mongoose = require('mongoose')

const classroomSchema = new mongoose.Schema(
  {
    images: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    Price: { type: Number, required: true },
    strikethrough_Price: { type: String, required: true },
    know: { type: String, required: true },
    emi: { type: String, required: true },
    incart:{ type: Number, required: false },
  },
  {
    timestamp: true,
    versionKey: false,
  },
)

module.exports = mongoose.model('classroom', classroomSchema)
