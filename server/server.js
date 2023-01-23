const { users } = require("./data/users.json");
require("dotenv").config();

const fs = require("fs");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

// Controllers

const logIn = (req, res) => {
  const user = users.find(({ email }) => email === req.body.email);
  if (!user || user.password !== req.body.password) {
    return res.status(404).json({
      status: "error",
      message: "Provided email or password is incorrect. Please try again!",
    });
  }

  const token = jwt.sign(
    {
      email: user.email,
    },
    process.env.ACCESS_TOKEN_SECRET
  );

  res.status(200).json({
    status: "success",
    token,
    id: user.id,
  });
};

const signUp = (req, res) => {
  const user = users.find(({ email }) => email === req.body.email);

  if (user) {
    return res.status(404).json({
      status: "error",
      message:
        "User with this email already exists. Please try different email or log in with current one!",
    });
  }

  users.push({
    id: Date.now(),
    ...req.body,
  });

  fs.writeFile(
    `${__dirname}/data/users.json`,
    JSON.stringify({ users }, 0, 2),
    (err) => {
      if (err) console.log(err);

      console.log("Users succesfully updated");
    }
  );

  const token = jwt.sign(
    {
      email: users.slice(-1)[0].email,
    },
    process.env.ACCESS_TOKEN_SECRET
  );

  res.status(200).json({
    status: "success",
    token,
    id: users.slice(-1)[0].id,
  });
};

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token)
    return res.status(404).json({
      status: "error",
      message: "token was not provided",
    });

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err)
      return res.status(404).json({
        status: "error",
        message: "Wrong token provided",
      });

    req.user = user;
    next();
  });
};

const getUsers = (req, res) => {
  const displayUsers = users.map((user) => {
    return {
      id: user.id,
      age: user.age,
      firstName: user.firstName,
      lastName: user.lastName,
      picture: user.picture,
    };
  });

  res.status(200).json({
    status: "success",
    users: displayUsers,
  });
};

const getUser = (req, res) => {
  const user = users.find(({ email }) => email === req.user.email);

  if (!user || user.id !== Number(req.params.userId)) {
    return res.status(403).json({
      status: "error",
      message: "Please try to sign in or sign up!",
    });
  }

  user.password = undefined;

  res.status(200).json({
    user,
  });
};

// Routes

app.get("/users", getUsers);
app.get("/users/:userId", authenticateToken, getUser);
app.post("/login", logIn);
app.post("/signup", signUp);

app.listen(port, () => {
  console.log(`server started at port ${port}`);
});
