import React from "react";
import "./style.css";

const Todo = ({ todos, deleteButton, editButton }) => {
  return (
    <div className="todo-view">
      <div className="todo-box">
        <div className="todo-title">{todos.title}</div>
        <div className="todo-content">{todos.content}</div>
      </div>
      <div className="button-box">
        <button className="todo-delete" onClick={() => deleteButton(todos.id)}>
          삭제하기
        </button>
        <button className="todo-done" onClick={() => editButton(todos.id)}>
          {todos.isDone ? "취소" : "완료"}
        </button>
      </div>
    </div>
  );
};

export default Todo;
