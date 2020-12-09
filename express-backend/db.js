const MongoClient = require('mongodb').MongoClient;
const DBName = "foo";

var state = {
  db: null
}

exports.connect = (url, done) => {
  if (state.db) return done();
  MongoClient.connect(url,{
      useNewUrlParser: true,
      useUnifiedTopology: true
    }, function(err, client) {
    if (err) return done(err);
    state.db = client.db(DBName);
    done();
  });
}

exports.get = () => {
  return state.db;
}

exports.close = (done) => {
  if (state.db) {
    state.db.close(function(err, result) {
      state.db = null;
      state.mode = null;
      done(err);
    });
  }
}
