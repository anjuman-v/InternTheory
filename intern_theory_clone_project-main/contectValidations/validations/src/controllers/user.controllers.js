const express = require("express");
const { body, validationResult } = require("express-validator");

const User = require("../models/user.models");

const router = express.Router();
 

router.post(
  "/",
  // body('username').isEmail(),
  body("email")
    .isEmail()
    .custom(async (value) => {
      const user = await User.findOne({ email: value });

      if (user) {
        throw new Error("Email is already taken");
      }
      return true;
    }),
  body("phoneNumber")
    .not()
    .isEmpty()
    .withMessage("phone no. cannot be empty")
    .isNumeric()
    .withMessage("phone no. must be a number between 1 and 120")
    .custom((val) => {
      if (val == 10) {
        throw new Error("Incorrect age provided");
      }
      return true;
    }),
  
  
  
  body("subject").custom((value) => {
    if (value && value.length < 2) {
      throw new Error("can't be empty");
    }
    return true;
  }),
  body("masaage").custom((value) => {
    if (value && value.length < 10) {
      throw new Error("wrtie at least more thne 10 words");
    }
    return true;
  }),
  async (req, res) => {
    try {
      console.log(body("email"));
      const errors = validationResult(req);
      console.log({ errors });
      if (!errors.isEmpty()) {
        return res.status(400).send({ errors: errors.array() });
      }

      const user = await User.create(req.body);

      return res.status(201).send(user);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  }
);

module.exports = router;

// ./
// ../models/
// ../../friendsBuilding/friendhouse
