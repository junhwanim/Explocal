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

const getAllUsers = async (req, res)=> {
  const client = await new MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db("explocal");
  console.log("connected");
  const users = await db.collection("users").find().toArray();
  console.log(users);
  res
    .status(200)
    .json({ status: 200, message: "it works", data: users });
  client.close();
}

const getOneUser = async (req, res) => {
  try {
    const { id } = req.params;
    const client = await new MongoClient(MONGO_URI, options);
    await client.connect();
    const db = client.db("explocal");
    let userId = await db
      .collection("users")
      .findOne({ _id: id });
    res
      .status(200)
      .json({ status: 200, message: "it works", data: userId });
    client.close();
  } catch {
    res.status(404).json({ satus: 404, message: "no user found" });
  }
};

module.exports = { getDestinations, getAllUsers, getOneUser };
