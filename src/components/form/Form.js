import React, { useState } from "react";
import "./style.css";

const Form = (props) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onChangeTitleInput = (e) => {
    setTitle(e.target.value);
  };

  const onChangeContentInput = (e) => {
    setContent(e.target.value);
  };

  const onClickAddTodoButton = (e) => {
    e.preventDefault();
    props.saveTodos(title, content);

    setTitle("");
    setContent("");
  };

  return (
    <form onSubmit={onClickAddTodoButton} className="form-box">
      <div className="input-box">
        <label className="form-label">제목 </label>
        <input
          className="form-input"
          type="text"
          onChange={onChangeTitleInput}
          value={title}
        />
        <label className="form-label">내용 </label>
        <input
          className="form-input"
          type="text"
          onChange={onChangeContentInput}
          value={content}
        />
      </div>
      <button className="form-button">추가하기</button>
    </form>
  );
};

export default Form;
