require('dotenv').config()
const express = require("express");

const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/iphone", (req, res) => {
  res.send("i get the i phone");
});

app.get("/head" , (req, res) => {
  res.send("<h1>Jai shree ram:</h1>");
});

app.get("/vishal", (req,res) => {
    res.send("<h1>Vishal</h1>");
  });
  

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
