import React, { useState } from "react";

import PropTypes from "prop-types";

import Header from "./Header";
import Footer from "./Footer";
import TodoItem from "./TodoItem";

TodoList.propTypes = {};

function TodoList(props) {
  const [listItem, setListItem] = useState([]);

  const onAddItem = (newItem) => {
    setListItem((prevState) => {
      return [...prevState, newItem];
    });
  };

  return (
    <ul>
      <Header onAddItem={onAddItem} arrowShow="true"></Header>

      {listItem.length > 0 &&
        listItem.map((item, index) => <TodoItem key={item.id} item={item} />)}

      {listItem.length > 0 && <Footer />}
    </ul>
  );
}

export default TodoList;
