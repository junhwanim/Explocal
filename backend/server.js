const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const { getDestinations } = require("./handler");

let app = express();

app.use(morgan("tiny"));
app.use(bodyParser.json());
app.use(express.static("public"));

app.get("/destinations", getDestinations);

app.listen(8000, () => {
  console.log(`Server listening on 8000`);
});
