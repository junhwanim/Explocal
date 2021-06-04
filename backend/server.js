const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const { getDestinations, getAllUsers, getOneUser } = require("./handler");

let app = express();

app.use(morgan("tiny"));
app.use(bodyParser.json());
app.use(express.static("public"));

app.get("/api/destinations", getDestinations);
app.get("/api/users", getAllUsers)
app.get("/api/user/:id", getOneUser)

app.listen(8000, () => {
  console.log(`Server listening on 8000`);
});
