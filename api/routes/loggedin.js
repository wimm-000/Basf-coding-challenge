var express = require("express");
const fetch = require("node-fetch");
var router = express.Router();

const CLIENT_ID = "6c3d7a5fd595da076d04";
const REDIRECT_URI = "http://localhost:3001/loggedin";
const SECRET = "4eb9e54d3d9883fecf537f22b015412783430ecf";

const fetchGithData = async (code, res) => {
  try {
    const response = await fetch(
      `https://github.com/login/oauth/access_token?code=${code}&client_id=${CLIENT_ID}&client_secret=${SECRET}`,
      {
        method: "POST",
        headers: { "Content-type": "application/json" },
      }
    );
    const token_response = await response.text();
    res.redirect(`/?${token_response}`);
  } catch (error) {
    console.log(error);
    res.redirect("/");
  }
};

router.get("/", function (req, res, next) {
  const code = req.query.code;
  console.log(req.query);
  if (code) {
    // fetch token
    fetchGithData(code, res);
  } else {
    res.redirect("/");
  }
});

module.exports = router;
