const Express = require("express");
const Router = Express.Router();
const Unirest = require("unirest");

var utelly = require('../utelly');
var db = require('../db');

Router.get("/all", async (req, res) => {
  try {
    let showsList = db.get().collection('showsList');
    showsList.find().toArray(function(err, docs) {
      res.status(200).json({showsList: docs});
    });
  } catch (err) {
    res.status(400).json({
      message: "Some error occured",
      err
    });
  }
});
Router.get("/all/:name", async (req, res) => {
  try {
    let {name} = req.params;
    console.log(name);
    let results;
    results = new Promise(async (resolve)=>{
      let query = await utelly.queryN(name, "us");
      resolve(query);
    });
    //console.log(results.body['results'][0]['locations'][0]['display_name']);
        //['results'][0]['locations'][0]['display_name']});
    setTimeout(()=>{
      res.status(200).json({'streaming':utelly.get()});//.body['results'][0]['locations'][0]['display_name']});
    }, 10);
  } catch (err) {
    res.status(400).json({
      message: "Some error occured",
      err
    });
  }
});

module.exports = Router;
