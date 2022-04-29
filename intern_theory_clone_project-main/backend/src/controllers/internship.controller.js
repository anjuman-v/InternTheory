const express = require("express");
const Internship = require("../models/internship.model");


const router = express.Router();


  router.post("/", async (req, res) => {
    try {
      const internships = await Internship.create(req.body);
      return res.status(201).send(internships);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  });

  router.get("", async (req, res) => {
    try {
      const internships = await Internship.find().lean().exec();
  
      return res.status(200).send(internships);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });

  router.get("/:name", async (req, res) => {
    try {
    //   const comment = await Internship.findById(req.params.id).lean().exec();

      const InternshipCity = await Internship.find({"city" :{$eq : req.params.name}}).lean().exec();
    //   db.movie.find({"movie_name" :{$eq : "Me and Orson Welles"}}).pretty()
  
      return res.status(201).send(InternshipCity);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });

  router.get("/user/:type", async (req, res) => {
    try {

      const InternshipType = await Internship.find({"time" :{$eq : req.params.type}}).lean().exec();
    //   db.movie.find({"movie_name" :{$eq : "Me and Orson Welles"}}).pretty()
     

      return res.status(201).send(InternshipType);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });

  module.exports = router;
