const express = require("express");
const router = express.Router();

const express = require("express");
const fs = require("fs");
const path = require("path");
const uniqid = require("uniqid");

const readDatabase = () => {
  const usersFilePath = path.join(__dirname, "users.json");
  const fileAsABuffer = fs.readFileSync(usersFilePath);
  const fileAsAString = fileAsABuffer.toString();
  const usersArray = JSON.parse(fileAsAString);
  return usersArray;
};

router.get("/", (req, res) => {
  const usersArray = readDatabase();
  res.send(usersArray);
});

router.get("/:id", (req, res) => {
  const usersArray = readDatabase();
  const idComingFromRequest = req.params.identifier;
  const user = usersArray.filter((user) => user.ID === idComingFromRequest);
});

router.post("/", (req, res) => {
  const usersArray = readDatabase();
  const newUserID = addNewUser(req.body);
  res.status(201).send({ id: newUserID });
});

router.put("/:id", (req, res) => {
  const usersArray = readDatabase();
  const updatedUser = updateUser(req.params.id, req.body);
  res.send(updatedUser);
});

router.delete("/:id", (req, res) => {
  const usersArray = readDatabase();
  const newUsersArray = usersArray.filter((user) => user.ID !== id);
  fs.writeFileSync(usersFilePath, JSON.stringify(newUsersArray));
  return id;
});

module.exports = router;
