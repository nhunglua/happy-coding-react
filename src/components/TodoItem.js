import React from "react";
import PropTypes from "prop-types";

TodoItem.propTypes = {};

function TodoItem(props) {
  const { item } = props;

  const renderItemContent = () => {
    return <p> {item.title} </p>;
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
      {item && renderItemContent()}
      <button className="btn-delete" onClick={() => onDeleteItem(item.id)}>
        X
      </button>
    </li>
  );
}

export default TodoItem;
