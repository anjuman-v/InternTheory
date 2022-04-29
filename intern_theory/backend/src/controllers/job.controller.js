const express = require("express");
const Job = require("../models/job.model");


const router = express.Router();


  router.post("/", async (req, res) => {
    try {
      const job = await Job.create(req.body);
      return res.status(201).send(job);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  });

  router.get("", async (req, res) => {
    try {
      const job = await Job.find().lean().exec();
  
      return res.status(200).send(job);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });

  router.get("/:name", async (req, res) => {
    try {
    //   const comment = await Internship.findById(req.params.id).lean().exec();

      const jobCity = await Job.find({"city" :{$eq : req.params.name}}).lean().exec();
    //   db.movie.find({"movie_name" :{$eq : "Me and Orson Welles"}}).pretty()
  
      return res.status(201).send(jobCity);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });

  router.get("/user/:type", async (req, res) => {
    try {

      const jobType = await Job.find({"time" :{$eq : req.params.type}}).lean().exec();
    //   db.movie.find({"movie_name" :{$eq : "Me and Orson Welles"}}).pretty()

      return res.status(201).send(jobType);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });

  module.exports = router;