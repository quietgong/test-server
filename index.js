const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  console.log("This is test server");
  res.send(req);
})

app.post("/", (req, res) => {
  const data = JSON.stringify(req.body);
  console.log(data);
  res.send(data);
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
