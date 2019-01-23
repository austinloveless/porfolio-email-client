const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const port = process.env.PORT || 4000;
const nodemailer = require("./lib/nodemailer");

app.use(bodyParser.json());
app.use(cors());

app.post("/email", (req, res) => {
  nodemailer.email(req.body, (err, sentMail) => {
    if (err) {
      console.log(err);
    } else {
      res.send("success");
    }
  });
  res.send("hit route");
});

app.listen(port, () => {
  console.log("part on port", port);
});
