const notesRouter = require("express").Router();
const { v4: uuidv4 } = require("uuid");
const inFileDB = require("../db/db.json");
const {
  readFromFile,
  readAndAppend,
  readAndDelete,
} = require("../helpers/fsUtils");

notesRouter.get("/", (req, res) => {
  readFromFile("./db/db.json").then((data) => res.json(JSON.parse(data)));
});

notesRouter.post("/notes", (req, res) => {
  let { title, text } = req.body;
  if (req.body) {
    let newNote = {
      title,
      text,
      id: uuidv4(),
    };

    readAndAppend(newNote, "./db/db.json");
    res.json(`Note has been successfully Saved!`);
  } else {
    res.errored(
      "Oopsies, something didn't go according to plan, please try again"
    );
  }
});

module.exports = notes;
