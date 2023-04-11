const express = require("express");
const path = require("path");
const api = require("./public/js/index");

const PORT = process.env.PORT || 3001;

const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", api);

app.use(express.static("public"));

// GET ROUTE // --> LANDING PAGE
app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/index.html"))
);

// GET ROUTE // --> NOTES PAGE
app.get("/public/notes", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/notes.html"))
);

// 404 PAGE //
app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "public/pages/404.html"))
);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
