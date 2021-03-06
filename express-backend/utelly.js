const Unirest = require("unirest");
const userInfo = require("./api-keys");

const UserKey = userInfo.utellyUser();
const QueryHost = userInfo.utellyHost();

const Headers = {
  "x-rapidapi-key": UserKey,
  "x-rapidapi-host": QueryHost,
  "useQueryString": true
};

var state = {
  response: null
}

exports.get = () => {
  return state.response;
}

exports.queryN = async (term, country="us") => {
  let req = Unirest("GET", "https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup");
  let retVal;
  req.query({
  	"term": term,
  	"country": country
  });
  req.headers(Headers);
  req.end(async function (res) {
  	if (res.error) throw new Error(res.error);
    retVal = new Promise(async resolve => {
      resolve(res);
    }).then((res)=>{
      console.log(res.body['results'][0]['locations'][0]['display_name']);
      state.response = res.body['results'][0]['locations'][0]['display_name'];
    });
  });
  return await retVal;
}
//res.body['results'][0]['locations'][0]['display_name']

exports.queryI = (id, source="imdb", country="us") => {
  let req = Unirest("GET", "https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/idlookup");
  req.query({
  	"source_id": id,
  	"source": source,
  	"country": country
  });
  req.headers(Headers);
  req.end(function (res) {
  	if (res.error) throw new Error(res.error);
    return res.body;
  });
}
