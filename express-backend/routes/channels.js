const express = require("express");
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;

router.get("/list", async (req, res) => {
  try {
    res.status(200).json({
      message: "No errors occured"
    });
  } catch (err) {
    res.status(400).json({
      message: "Some error occured",
      err
    });
  }
});

module.exports = router;
