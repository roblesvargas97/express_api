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

app.post("/v1/explorers", (req, res) => {
  console.log(`Api explorers post Request ${new Date()}`);
  const requestBody = req.body;
  res.status(201).json({ message: "created" });
});

app.put("/v1/explorers/:id", (req, res) => {
  console.log(`Api explorers put request ${new Date()}`);
  console.log(`Update explorer with id ${req.params.id}`);
  const requestBody = req.body;
  res.status(200).json({ message: "Updated" });
});

app.delete("/v1/explorers/:id", (req, res) => {
  console.log(`Api explorers delete request ${new Date()}`);
  console.log(`delete explorer with id ${req.params.id}`);
  const requestBody = req.body;
  res.status(200).json({ message: "Deleted" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
