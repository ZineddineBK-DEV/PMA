// ============imports=============
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
// ============ imporing routes ================



//========== configuration ============
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// configuring Access Method control

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Methods",
      "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    );
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization, Cache-Control"
    );
    // intercept OPTIONS method
    if ("OPTIONS" == req.method) {
      res.status(200).send();
    } else {
      next();
    }
  });
  //=========== connecting to database ==============
mongoose.set("strictQuery", true);
mongoose   
  .connect(
    "mongodb+srv://root:root@pmacluster.dvzi5iq.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => console.log("error has been occured: ", err));

  // ========= configurring routes ==========






  // ======== exporting app ========
module.exports = app;
