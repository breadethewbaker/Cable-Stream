const Express = require("express");
const App = Express();
const Cors = require("cors");
const BodyParser = require("body-parser");
const Logger = require("morgan");
var db = require("./db");
const URL = "mongodb+srv://brett:N2XHvu6L2ni8g8HX@cluster0.zhulu.mongodb.net?retryWrites=true&w=majority";

const port = process.env.PORT || 3001;
App.use(Logger('dev'));
App.use(Cors());
App.use(BodyParser.urlencoded({ extended: true }));
App.use(BodyParser.json());

const ChannelsRouter = require("./routes/channels");
App.use("/channels", ChannelsRouter);

db.connect(URL, function(err) {
  if (err) {
    console.log('Unable to connect to Mongo.');
    process.exit(1);
  } else {
    App.listen(port, function() {
      console.log("Runnning on " + port);
    });
  }
});

module.exports = App;
