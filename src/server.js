const express = require("express");
const cors = require("cors");
const usersRoutes = require("./users");

const server = express();

const port = 3009;

server.use(cors());
server.use(express.json());

server.use("/users", usersRoutes);

server.listen(port, () => {
  console.log("Server is running on port: ", port);
});
