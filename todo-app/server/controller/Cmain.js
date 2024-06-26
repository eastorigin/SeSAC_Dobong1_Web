const { Todo } = require("../models");

// test용 api
exports.getIndex = (req, res) => {
  res.send("response from api server [GET /api-server]");
};

exports.getUser = (req, res) => {
  res.send("response from pai server [GET /api-server]");
};

// GET /api-server/todos
exports.getTodos = async (req, res) => {
  try {
    const todoAll = await Todo.findAll(); // [{id, text, done}]
    res.json(todoAll);
  } catch (err) {
    console.log("server err!", err);
    res.status(500).send("SERVER ERROR!!, 관리자에게 문의하세요");
  }
};

// POST /api-server/todo
exports.postTodo = async (req, res) => {
  /* {
    id: 모델 정의시 auto_increment 속성 추가해뒀음(x), 
    text: 할 일(o), 
    done: 모델 정의시 false(o)를 defaultValue 처리해뒀음(x)
  } */
  try {
    //  req.body = {text: '~~~~'}
    const { text } = req.body;
    await Todo.create({
      text,
    });
    res.send({ isSuccess: true });
  } catch (err) {
    console.log("server err!", err);
    res.status(500).send("SERVER ERROR!!, 관리자에게 문의하세요");
  }
};

exports.patchTodo = async (req, res) => {
  const { todoId } = req.params;
  try {
    const todo = await Todo.findbyPk(todoId);
    todo.done = !todo.done;
    await todo.save();
    res.send({ isSuccess: true, done: todo.done });
  } catch (err) {
    console.log("server err!", err);
    res.status(500).send("SERVER ERROR!!, 관리자에게 문의하세요");
  }
};

exports.deleteTodo = async (req, res) => {
  const { todoId } = req.params;
  try {
    const todo = await Todo.findbyPk(todoId);
    await todo.destroy();
    res.send({ isSuccess: true });
  } catch (err) {
    console.log("server err!", err);
    res.status(500).send("SERVER ERROR!!, 관리자에게 문의하세요");
  }
};
