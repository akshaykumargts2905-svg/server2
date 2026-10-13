// const { sum, sub, mul, div } = require("./maths/arithmatic");

// console.log("sum is", sum(2, 3));
// console.log("sub is", sub(2, 3));
// console.log("mul is", mul(2, 3));
// console.log("div is", div(10, 2));

// import { sum, sub, mul, div } from "./maths/arithmatic.js";

// console.log("sum is", sum(2, 3));
// console.log("sub is", sub(2, 3));
// console.log("mul is", mul(2, 3));
// console.log("div is", div(10, 2));

import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello i am Akshay");
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
