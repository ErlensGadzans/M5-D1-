const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");
const uniqid = require("uniqid");

const readDatabase = () => {
  const usersFilePath = path.join(__dirname, "users.json"); //to reate filepath to Json
  const fileAsABuffer = fs.readFileSync(usersFilePath); // turns file recognizable for computer
  const fileAsAString = fileAsABuffer.toString(); // Buffer converted to string
  const usersArray = JSON.parse(fileAsAString); //From String to Json
  return usersArray;
};

router.get("/", (req, res) => {
  const usersArray = readDatabase();
  res.send(usersArray); //send Json to response
});

router.get("/:id", (req, res) => {
  const usersArray = readDatabase();

  const idComingFromRequest = req.params.id; //gettin id from url
  const userWithId = usersArray.filter(
    (user) => user.ID === idComingFromRequest
  ); //getting the object that has the id
  res.send(userWithId); //sends json in the response
});

router.post("/", (req, res) => {
  const usersArray = readDatabase();

  const newUser = req.body;
  newUser.ID = uniqid();
  usersArray.push(newUser);
  fs.writeFileSync(studPath, JSON.stringify(studArray));
  res.status(201).send({ id: newUserID });
});

// router.put("/:id", (req, res) => {
//   const usersArray = readDatabase();
//   const updatedUser = updateUser(req.params.id, req.body);
//   res.send(updatedUser);
// });

// router.delete("/:id", (req, res) => {
//   const usersArray = readDatabase();
//   const newUsersArray = usersArray.filter((user) => user.ID !== id);
//   fs.writeFileSync(usersFilePath, JSON.stringify(newUsersArray));
//   return id;
// });

module.exports = router;
