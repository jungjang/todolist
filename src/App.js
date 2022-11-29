import React, { useState } from "react";
import Header from "./components/header/Header";
import Form from "./components/form/Form";
import List from "./components/list/List";

const App = () => {
  const [todos, setTodos] = useState([]);

  const SaveTodos = (title, content) => {
    setTodos([
      ...todos,
      { id: todos.length + 1, title: title, content: content, isDone: false },
    ]);
  };
  return (
    <div>
      <Header />
      <Form todos={todos} setTodos={setTodos} saveTodos={SaveTodos} />
      <List todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
