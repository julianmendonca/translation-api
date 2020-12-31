const translatte = require("translatte");
var express = require("express");
var app = express();
app.get("/translate", async (req, res) => {
  const text = req.query.text;
  console.log(text);
  const translated = await makeRequest(text);
  console.log(translated);
  res.send(translated);
  //res.send(text);
});

app.listen(3000);

const makeRequest = async (text) => {
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
};

makeRequest();
