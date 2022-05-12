import React from "react";
import PropTypes from "prop-types";

TodoItem.propTypes = {};

function TodoItem(props) {
  const { item } = props;
  console.log({ item });
  const renderItemContent = () => {
    return <p> {item.title} </p>;
  };

  return (
    <li className="todo-item item">
      <input type="checkbox" checked />
      {item && renderItemContent()}
      <button className="btn-delete">X</button>
    </li>
  );
}

export default TodoItem;
