const express = require("express");
const app = express();
const port = 8080;

app.get("/", (req, res) => res.send("Hello Ameen, this is CI/CD pipeline!"));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
