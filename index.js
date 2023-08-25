const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  console.log(req);
  res.send(req);
})

app.post("/", (req, res) => {
  console.log(req.body);
  res.send(req);
});

app.patch("/", (req, res) => {
  console.log(req.body);
  res.send(req);
});

app.delete("/", (req, res) => {
  console.log(req.body);
  res.send(req);
});

app.listen(port, () => {
  console.log(`Test Server listening on port ${port}`);
});
