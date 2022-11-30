import React from "react";
import "./style.css";
import Todo from "../todo/Todo";

const List = ({ todos, setTodos }) => {
  const deleteButton = (id) => {
    const newTodos = todos.filter((todos) => todos.id !== id);
    setTodos(newTodos);
  };

  const editButton = (id) => {
    const newTodos = todos.map((todos) => {
      if (todos.id === id) {
        return { ...todos, isDone: !todos.isDone };
      } else {
        return { ...todos };
      }
    });
    setTodos(newTodos);
  };

  return (
    <div className="list-box">
      <h1 className="todo-condition">Working...😢</h1>
      <div>
        {todos.map((todos) => {
          if (todos.isDone === false) {
            return (
              <Todo
                todos={todos}
                deleteButton={deleteButton}
                editButton={editButton}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <h1 className="todo-condition">Done...😎</h1>
      <div>
        {todos.map((todos) => {
          if (todos.isDone === true) {
            return (
              <Todo
                key={todos.id}
                todos={todos}
                deleteButton={deleteButton}
                editButton={editButton}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};

export default List;
