const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;
const moment = require("moment");
const { v4: uuidv4 } = require("uuid");

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const getDestinations = async (req, res) => {
  const client = await new MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db("explocal");
  //console.log("connected");
  const destinations = await db
    .collection("destination")
    .find()
    .sort({ country: 1, cities: 1 })
    .toArray();
  //console.log(destinations);
  res
    .status(200)
    .json({ status: 200, message: "it works", data: destinations });
  client.close();
};

const getAllUsers = async (req, res) => {
  const client = await new MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db("explocal");
  //console.log("connected");
  const users = await db.collection("users").find().toArray();
  //console.log(users);
  res.status(200).json({ status: 200, message: "it works", data: users });
  client.close();
};

const getOneUser = async (req, res) => {
  try {
    const { id } = req.params;
    const client = await new MongoClient(MONGO_URI, options);
    await client.connect();
    const db = client.db("explocal");
    let userId = await db.collection("users").findOne({ _id: id });
    res.status(200).json({ status: 200, message: "it works", data: userId });
    client.close();
  } catch {
    res.status(404).json({ satus: 404, message: "no user found" });
  }
};

const addReview = async (req, res) => {
  try {
    const { id } = req.params;
    const { rateNum, rateReview, reviewer } = req.body;
    const client = await new MongoClient(MONGO_URI, options);
    await client.connect();
    const db = client.db("explocal");
    await db.collection("users").update(
      { _id: id },
      {
        $push: {
          rating: {
            $each: [
              {
                rate: rateNum,
                review: rateReview,
                timeStamp: moment().format("lll"),
                by: reviewer,
              },
            ],
          },
        },
      }
    );
    const updatedRecord = await db.collection("users").findOne({ _id: id });
    res
      .status(201)
      .json({ status: 201, message: "updated", data: updatedRecord });
    client.close();
  } catch {
    res.status(404).json({ status: 404, message: "failed" });
  }
};

const createUser = async (req, res) => {
  const {
    country,
    city,
    name,
    email,
    username,
    password,
    password2,
    bio,
    avatarSrc,
    local,
  } = req.body;
  const userBody = {
    country,
    city,
    name,
    email,
    username,
    password,
    bio,
    avatarSrc,
    local,
  };
  console.log(userBody, "user");
  const client = await new MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db("explocal");
  const allUsers = await db.collection("users").find().toArray();
  const allUsersName = allUsers.map((user) => {
    return user.username;
  });
  let status = "";
  let error = "";
  if (
    country &&
    city &&
    name &&
    email &&
    username &&
    password &&
    password2 &&
    bio &&
    avatarSrc
  ) {
    status = "success";
    if (!email.split("").includes("@")) {
      return res.status(400).json({ status: "error", error: "missing-@" });
    }
    if (local !== "true" && local !== "false") {
      return res
        .status(400)
        .json({ status: "error", error: "incorrect-answer" });
    }
    if (allUsersName.includes(username)) {
      return res.status(400).json({ status: "error", error: "username" });
    }
    if (password.length < 6) {
      return res
        .status(400)
        .json({ status: "error", error: "password-length" });
    }
    if (password !== password2) {
      return res.status(400).json({ status: "error", error: "password-match" });
    } else {
      const createOne = await db.collection("users").insertOne({
        ...userBody,
        _id: uuidv4(),
        local: "true",
        rating: [],
      });
      return res.status(201).json({
        status: status,
        error: error,
        data: createOne,
      });
    }
  } else {
    return res.status(400).json({ status: "error", error: "missing-entry" });
  }
};

const updateUserInfo = async (req, res) => {
  const { id } = req.params;
  const { name, avatarSrc, local, email, country, city, bio, username } =
    req.body;
  const client = await new MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db("explocal");
  const allUsers = await db.collection("users").find().toArray();
  const allUsersName = allUsers.map((user) => {
    return user.username;
  });
  const currentUser = allUsers.filter((user) => {
    return user._id === id;
  });
  const currentUserName = currentUser[0].username;
  const filteredAllUsers = allUsersName.filter((user) => {
    return user !== currentUserName;
  });
  let status = "";
  let error = "";
  if (country && city && name && email && username && bio && avatarSrc) {
    status = "success";
    if (!email.split("").includes("@")) {
      return res.status(400).json({ status: "error", error: "missing-@" });
    }
    if (local !== "true" && local !== "false") {
      return res
        .status(400)
        .json({ status: "error", error: "incorrect-answer" });
    }
    if (filteredAllUsers.includes(username)) {
      return res.status(400).json({ status: "error", error: "username" });
    } else {
      await db.collection("users").updateOne(
        { _id: id },
        {
          $set: { ...req.body },
        }
      );
      const updatedRecord = await db.collection("users").findOne({ _id: id });
      return res.status(201).json({
        status: status,
        error: error,
        data: updatedRecord,
      });
    }
  } else {
    return res.status(400).json({ status: "error", error: "missing-entry" });
  }
};

const updatePassword = async (req, res) => {
  const { id } = req.params;
  const { currentPassword, password, password2 } = req.body;
  const userBody = {
    password,
  };
  const client = await new MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db("explocal");
  const allUsers = await db.collection("users").find().toArray();
  const currentUser = allUsers.filter((user) => {
    return user._id === id;
  });
  const currentUserPassword = currentUser[0].password;
  let status = "";
  let error = "";
  if (currentPassword && password && password2) {
    status = "success";
    if (currentUserPassword !== currentPassword) {
      return res
        .status(400)
        .json({ status: "error", error: "current-password" });
    }
    if (currentUserPassword === password) {
      return res
        .status(400)
        .json({ status: "error", error: "same-password" });
    }
    if (password.length < 6) {
      return res
        .status(400)
        .json({ status: "error", error: "password-length" });
    }
    if (password !== password2) {
      return res.status(400).json({ status: "error", error: "password-match" });
    } else {
      await db.collection("users").updateOne(
        { _id: id },
        {
          $set: { ...userBody },
        }
      );
      const updatedRecord = await db.collection("users").findOne({ _id: id });
      return res.status(201).json({
        status: status,
        error: error,
        data: updatedRecord,
      });
    }
  } else {
    return res.status(400).json({ status: "error", error: "missing-entry" });
  }
};

module.exports = {
  getDestinations,
  getAllUsers,
  getOneUser,
  addReview,
  createUser,
  updateUserInfo,
  updatePassword,
};
