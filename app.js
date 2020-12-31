const translatte = require("translatte");
const cors = require("cors");
var express = require("express");
let port = process.env.PORT || 3000;
var app = express();
app.use(cors());
app.get("/translate", async (req, res) => {
  const text = req.query.text;
  console.log(text);
  const translated = await makeRequest(text);
  console.log(translated);
  res.send(translated);
  //res.send(text);
});

app.listen(port);

const makeRequest = async (text) => {
  if (text !== undefined) {
    const translated = await translatte(text, { to: "es" })
      .then((res) => {
        console.log(res.text);
        return res.text;
      })
      .catch((err) => {
        console.error(err);
        return "";
      });
    return translated;
  } else {
    return "";
  }
};

makeRequest();
