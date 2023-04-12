const notes = require("express").Router();

notes.get("/notes", async (req, res) => {
  try {
    const data = { placeholder: "Text" };
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

// TODO: POST ROUTE
notes.post("/notes", async (req, res) => {
  try {
    const data = { placeholder: "Text" };
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

module.exports = notes;
