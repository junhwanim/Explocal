const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const getDestinations = async (req, res) => {
  const client = await new MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db("explocal");
  console.log("connected");
  const destinations = await db.collection("destination").find().sort({country: 1, cities: 1}).toArray();
  console.log(destinations);
  res
    .status(200)
    .json({ status: 200, message: "it works", data: destinations });
  client.close();
};

module.exports = { getDestinations };
