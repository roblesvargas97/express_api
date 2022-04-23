const express = require("express");
const req = require("express/lib/request");
const app = express();
const port = 3000;

app.get("/v1/explorers", (req, res) => {
  console.log(`Api Explorers get all request ${new Date()}`);
  const explorer1 = { id: 1, name: "Uriel1" };
  const explorer2 = { id: 2, name: "Uriel2" };
  const explorer3 = { id: 3, name: "Uriel3" };
  const explorer4 = { id: 4, name: "Uriel4" };
  const explorers = [explorer1, explorer2, explorer3, explorer4];
  res.status(200).json(explorers);
});

app.get("/v1/explorers/:id", (req, res) => {
  console.log(`Api explorers get all request ${new Date()}`);
  console.log(`Getting explorer with id ${req.params.id}`);
  const explorer = { id: 1, name: "Uriel" };
  res.status(200).json(explorer);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
