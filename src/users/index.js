const express = require("express");
const router = express.Router();

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
});

router.post("/", (req, res) => {
  const usersArray = readDatabase();
});

router.put("/:id", (req, res) => {
  const usersArray = readDatabase();
});

router.delete("/:id", (req, res) => {
  const usersArray = readDatabase();
  const newUsersArray = usersArray.filter((user) => user.ID !== id);
  fs.writeFileSync(usersFilePath, JSON.stringify(newUsersArray));
  return id;
});

module.exports = router;
