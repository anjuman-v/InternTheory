const express = require('express')

const router = express.Router()
const classroomSchema = require('../Schema/classroomSchema')

router.get('/', async (req, res) => {
  try {
    const data = await classroomSchema.find({})

   return res.status(200).send(data)
  } catch (err) {
    console.log(err)
  }
})

module.exports = router
