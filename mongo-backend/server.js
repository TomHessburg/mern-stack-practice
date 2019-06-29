//imports
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const todoRouter = express.Router();
const port = process.env.PORT || 4000;
//models
const Todo = require("./todo.model");
//server
server = express();
server.use(express.json());
server.use(cors());
//mongo connection
mongoose.connect("mongodb://127.0.0.1:27017/todos", { useNewURLParser: true });
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Mongodb database connected! :)");
});
//router setup/endpoints
todoRouter.get("/", (req, res) => {
  Todo.find(function(err, todos) {
    if (err) {
      console.log(err);
    } else {
      res.status(200).json(todos);
    }
  });
});

todoRouter.get("/:id", (req, res) => {
  let id = req.params.id;

  Todo.findById(id, function(err, todo) {
    if (err) {
      console.log(err);
    } else {
      res.status(200).json(todo);
    }
  });
});

todoRouter.post("/add", (req, res) => {
  let todo = new Todo(req.body);

  todo
    .save()
    .then(todo => {
      res.status(201).json({ todo: "todo added successfully" });
    })
    .catch(err => res.status(400).json(err));
});

todoRouter.post("/update/:id", (req, res) => {
  const id = req.params.id;
  Todo.findById(id, function(err, todo) {
    if (!todo) {
      res.status(404).json({ err: "data not found" });
    } else if (err) {
      res.status(500).json(err);
    } else {
      todo.todo_description = req.body.todo_description;
      todo.todo_responsible = req.body.todo_responsible;
      todo.todo_priority = req.body.todo_priority;
      todo.todo_completed = req.body.todo_completed;

      todo
        .save()
        .then(saved => {
          res.status(201).json(saved);
        })
        .catch(err => {
          res.status(500).json(err);
        });
    }
  });
});

server.use("/todos", todoRouter);

server.get("/", (req, res) => {
  res.send("Mongo DB practice project");
});

//listening...
server.listen(port, () => {
  console.log(`server listening on port:${port}`);
});
