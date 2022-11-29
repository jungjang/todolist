import React from "react";
import "./style.css";

const Todo = (props) => {
  return (
    <div className="todo-view">
      <div className="todo-box">
        <div className="todo-title">{props.todos.title}</div>
        <div className="todo-content">{props.todos.content}</div>
      </div>
      <div className="button-box">
        <button
          className="todo-delete"
          onClick={() => props.deleteButton(props.todos.id)}
        >
          삭제하기
        </button>
        <button
          className="todo-done"
          onClick={() => props.editButton(props.todos.id)}
        >
          {props.todos.isDone ? "취소" : "완료"}
        </button>
      </div>
    </div>
  );
};

export default Todo;
