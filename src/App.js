import React, { useState } from "react";
import Header from "./components/header/Header";
import Form from "./components/form/Form";
import List from "./components/list/List";

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "리액트를 공부하자",
      content: "컴포넌트를 이해하자",
      isDone: false,
    },
    {
      id: 2,
      title: "낮잠을 자자",
      content: "머리가 멈추기 전에",
      isDone: false,
    },
  ]);

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
      <List todos={todos} setTodos={setTodos} saveTodos={SaveTodos} />
    </div>
  );
};

export default App;
