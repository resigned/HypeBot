const { send, json } = require("micro");
const { router, get, post, del, put } = require("microrouter");
const { logRequest } = require("../../middlewares/mid");
const cors = require("micro-cors")();
const database = require("../../database/db");
const model = require("../../model/index");
const controller = require("../../controller/index");

const notFound = async (req, res) => {
  send(res, 404, "Endpoint not found :(");
};

const login = async (req, res) => {
  //this is where login will go!
};

const refresh = async (req, res) => {
  //refresh JWT token for login
};

const test = async (req, res) => {
  send(res, 200, {
    lol: `This is a test, ${req.params.debug}`,
    lol2: "rip",
    lol3: "rip"
  });
};

const Users = async (req, res) => {
  const users = await controller.user.allUsers();
  send(res, 200, users);
};

const register = async (req, res) => {
  //const { username, password, email } = await json(req);
  //check username
  //check password
  //check email
  try {
    const rawUser = await json(req);
    const user = await controller.user.newUser(rawUser);
    send(res, 201, user);
  } catch (err) {
    send(res, 500, { error: err });
  }
};

const findUser = async (req, res) => {
  const username = req.params.user;
  const user = await controller.user.userByUsername(username);
  send(res, 200, user);
};

const { test2 } = require("../../middlewares/test2");

module.exports = cors(
  logRequest(
    router(
      get("/test/:debug", test2(test)),
      get("/user/:user", findUser),
      get("/users", Users),
      get("/*", notFound),

      post("/register", register),
      post("/refresh", refresh)
    )
  )
);
