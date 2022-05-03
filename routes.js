const router = require("express").Router();
const TodoModel = require("./model/todo");

// get all todo
router.get("", async (req, res) => {
  try {
    const todo = await TodoModel.find();
    res.status(200).json({
      success: true,
      payload: todo,
    });
  } catch (err) {
    res.status(500).json({
      status: "failed",
      message: "Server Error",
    });
    console.error(err.message);
  }
});
// get specific todo with id

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const getTodo = await TodoModel.findById(id);
    res.status(200).json({
      success: true,
      message: "",
      payload: getTodo,
    });
  } catch (err) {
    res.status(500).json({
      status: "failed",
      message: "Server Error",
    });
  }
});
// create todo
router.post("", async (req, res) => {
  try {
    const { isDone, text } = req.body;
    console.log(text);
    const todo = new TodoModel({
      text,
      isDone,
    });
    await todo.save();
    res.status(201).json({
      success: true,
      message: "todo was added ",
      payload: todo,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
    console.error(err.message);
  }
});

// delete specific todo
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await TodoModel.findByIdAndDelete(id);
    res.status(201).json({
      message: "todo was deleted successfully",
      payload: todo,
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({
      success: false,
      message: "server error",
    });
  }
});

// edit specific todo
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { text, isDone } = req.body;
    const todo = await TodoModel.findByIdAndUpdate(id, {
      text,
      isDone: !isDone,
    });
    console.log(todo);
    res.status(201).json({
      message: "todo was updated successfully",
      payload: todo,
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({
      message: "Server Error",
      status: false,
    });
  }
});
module.exports = router;
