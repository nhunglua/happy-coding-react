import React from "react";
import PropTypes from "prop-types";

TodoItem.propTypes = {};

function TodoItem(props) {
  const { item } = props;

  const renderItemContent = () => {
    return <p> {item.title} </p>;
  };

  const onDeleteItem = (id) => {
    props.onDeleteItem(id);
  };

  return (
    <li className="todo-item item">
      <input type="checkbox" />
      {item && renderItemContent()}
      <button className="btn-delete" onClick={() => onDeleteItem(item.id)}>
        X
      </button>
    </li>
  );
}

export default TodoItem;
