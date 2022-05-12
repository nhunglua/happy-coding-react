import React, { useState } from "react";
import { ENTER_KEY_CODE } from "../constant";
import PropTypes from "prop-types";

TodoItem.propTypes = {};

function TodoItem(props) {
  const { item } = props;

  const [editingMode, setEditingMode] = useState(false);
  const [newContent, setNewContent] = useState(item.title);

  const onSwitchMode = () => {
    setEditingMode(true);
  };

  const renderItemContent = () => {
    if (!editingMode) {
      return <p onClick={onSwitchMode}> {item.title} </p>;
    }

    return (
      <input
        defaultValue={newContent}
        className="input-edit"
        onChange={onItemContentChanged}
        onKeyUp={handleFinishEditing}
      />
    );
  };

  const onItemContentChanged = (event) => {
    setNewContent(event.target.value);
  };
  const handleFinishEditing = (event) => {
    event.preventDefault();

    const { onFinishEditItem } = props;

    if (event.keyCode === ENTER_KEY_CODE) {
      onFinishEditItem(item, newContent);

      setEditingMode(false);
    }
  };

  const onDeleteItem = (id) => {
    const { onDeleteItem } = props;

    if (typeof onDeleteItem === "function") {
      onDeleteItem(id);
    }
  };

  const completedItem = (id) => {
    const { onCompletedItem } = props;

    if (typeof onCompletedItem === "function") {
      onCompletedItem(id);
    }
  };

  return (
    <li className={`todo-item ${item.isComplete ? "completed" : "item"}`}>
      <input
        type="checkbox"
        checked={item.isComplete}
        onChange={() => completedItem(item.id)}
      />
      {renderItemContent()}
      <button className="btn-delete" onClick={() => onDeleteItem(item.id)}>
        X
      </button>
    </li>
  );
}

export default TodoItem;
