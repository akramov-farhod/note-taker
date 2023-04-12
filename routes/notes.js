const notes = require("express").Router();
const {
  readFromFile,
  readAndAppend,
  readAndDelete,
} = require("../helpers/fsUtils");
const { v4: uuidv4 } = require("uuid");

notes.get("/", (req, res) => {
  readFromFile("./db/db.json").then((data) => res.json(JSON.parse(data)));
});

notes.post("/", (req, res) => {
  const { title, text } = req.body;
  if (req.body) {
    const newNote = {
      title,
      text,
      id: uuidv4(),
    };

    readAndAppend(newNote, "./db/db.json");
    res.json(`Note has been successfully SAVED!`);
  } else {
    res.error(
      "Oopsies, something didn't go according to plan, please try again"
    );
  }
});

notes.delete("/:id", (req, res) => {
  if (req.params.id) {
    const noteID = req.params.id;
    readAndDelete(noteID, "./db/db.json");
    res.json(`Note has been DELETED`);
    return;
  } else {
    res.error("Immortal objects can't be deleted");
  }
});

module.exports = notes;
