import React from "react";
import "./style.css";
import Todo from "../todo/Todo";

const List = (props) => {
  const deleteButton = () => {
    console.log("delete");
    // const newTodos = props.todos.filter((todo) => {
    //   return todo.id !== id;
    // });
    // props.setTodos(newTodos);
  };

  const editButton = () => {
    console.log("edit");
    // const newTodos = props.todos.map((todo) => {
    //   if (todo.id === id) {
    //     return {
    //       ...todo,
    //       isDone: !todo.isDone,
    //     };
    //   } else {
    //     return { ...todo };
    //   }
    // });
    // props.setTodos(newTodos);
  };

  return (
    <div className="list-box">
      <h1 className="todo-condition">Working...😢</h1>
      <div>
        {props.todos.map((todo) => {
          if (todo.isDone === false) {
            return (
              <Todo
                key={todo.id}
                todo={todo}
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
        {props.todos.map((todo) => {
          if (todo.isDone === true) {
            return (
              <Todo
                key={todo.id}
                todo={todo}
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
