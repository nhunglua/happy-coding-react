import React, { useEffect, useState } from "react";

import PropTypes from "prop-types";

import Header from "./Header";
import Footer from "./Footer";
import TodoItem from "./TodoItem";

TodoList.propTypes = {};

function TodoList(props) {
  const [listItem, setListItem] = useState([]);
  const [currentFilter, setCurrentFilter] = useState("all");

  const onAddItem = (newItem) => {
    setListItem([...listItem, newItem]);
  };

  const onDeleteItem = (id) => {
    setListItem(listItem.filter((item) => item.id !== id));
  };

  const onCompletedItem = (id) => {
    const updateData = listItem.map((item) => ({
      ...item,
      isComplete: item.id === id ? !item.isComplete : item.isComplete,
    }));

    setListItem(updateData);
  };

  const onChangeFilter = (filter) => {
    setCurrentFilter(filter);
  };

  let data = [];
  const activeList = listItem.filter((item) => !item.isComplete);
  const completeList = listItem.filter((item) => item.isComplete);

  if (currentFilter === "all") {
    data = listItem;
  } else if (currentFilter === "active") {
    data = activeList;
  } else {
    data = completeList;
  }

  const countItem = activeList.length;
  const countCompleted = completeList.length;

  const onClearCompletedClick = () => {
    setListItem(activeList);
  };

  return (
    <ul>
      <Header onAddItem={onAddItem} arrowShow="true"></Header>

      {data.length > 0 &&
        data.map((item, index) => (
          <TodoItem
            key={item.id}
            item={item}
            onDeleteItem={onDeleteItem}
            onCompletedItem={onCompletedItem}
          />
        ))}

      {listItem.length > 0 && (
        <Footer
          total={countItem}
          onChangeFilter={onChangeFilter}
          countCompleted={countCompleted}
          onClearCompletedClick={onClearCompletedClick}
        />
      )}
    </ul>
  );
}

export default TodoList;
