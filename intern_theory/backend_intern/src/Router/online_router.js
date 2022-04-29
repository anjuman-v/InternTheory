const express = require('express')

const router = express.Router()
const onlineSchema = require('../Schema/onlineSchema')

router.get('/', async (req, res) => {
  try {
    const data = await onlineSchema.find({})

    res.status(200).send(data)
  } catch (err) {
    console.log(err)
  }
})

module.exports = router
