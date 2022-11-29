import React from "react";
import "./style.css";

const Todo = (props) => {
  return (
    <div className="todo-view">
      <div className="todo-box">
        <div className="todo-title">{props.todo.title}</div>
        <div className="todo-content">{props.todo.content}</div>
      </div>
      <div className="button-box">
        <button className="todo-delete" onClick={props.deleteButton}>
          삭제하기
        </button>
        <button className="todo-done" onClick={props.editButton}>
          완료
        </button>
      </div>
    </div>
  );
};

export default Todo;
