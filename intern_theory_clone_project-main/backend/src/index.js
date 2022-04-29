const express = require("express")

const cors = require("cors");

const internshipController = require("./controllers/internship.controller");
const jobController = require("./controllers/job.controller");

const app = express();

app.use(cors());

app.use(express.json());

app.use("/internship", internshipController);
app.use("/job", jobController);

module.exports = app;

