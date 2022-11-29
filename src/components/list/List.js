import React from "react";
import "./style.css";
import Todo from "../todo/Todo";

const List = (props) => {
  const deleteButton = (id) => {
    const newTodos = props.todos.filter((todos) => todos.id !== id);
    props.setTodos(newTodos);
  };

  const editButton = (id) => {
    console.log("edit");
    const newTodos = props.todos.map((todos) => {
      if (todos.id === id) {
        return { ...todos, isDone: !todos.isDone };
      } else {
        return { ...todos };
      }
    });
    props.setTodos(newTodos);
  };

  return (
    <div className="list-box">
      <h1 className="todo-condition">Working...😢</h1>
      <div>
        {props.todos.map((todos) => {
          if (todos.isDone === false) {
            return (
              <Todo
                key={todos.id}
                todos={todos}
                setTodos={props.setTodos}
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
        {props.todos.map((todos) => {
          if (todos.isDone === true) {
            return (
              <Todo
                key={todos.id}
                todos={todos}
                setTodos={props.setTodos}
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
