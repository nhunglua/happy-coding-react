import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as todoActions from "../actions/todo";
import Header from "./Header";
import Footer from "./Footer";
import TodoItem from "./TodoItem";

function TodoList(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    const { fetchTodo } = todoActions;
    dispatch(fetchTodo());
  }, []);
  const todoList = useSelector((state) => state.todo);

  //===============================
  const [listItem, setListItem] = useState(todoList.listItem);
  console.log({ listItem, todoList });
  const [currentFilter, setCurrentFilter] = useState("all");
  const [checkCompleteAll, setCheckCompleteAll] = useState(false);

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
    data = listItem.filter((item) => item.isComplete);
  }

  const countItem = activeList.length;
  const countCompleted = completeList.length;

  const onClearCompletedClick = () => {
    setListItem(activeList);
  };

  const onFinishEditItem = (itemEdit, newValue) => {
    const updateData = listItem.map((item) => ({
      ...item,
      title: item.id === itemEdit.id ? newValue : item.title,
    }));

    setListItem(updateData);
  };

  const onToggleCompleteAll = () => {
    const updateListItem = listItem.map((item) => ({
      ...item,
      isComplete: checkCompleteAll,
    }));

    //What's happen?
    setCheckCompleteAll(!checkCompleteAll);
    setListItem(updateListItem);
  };

  return (
    <ul>
      <Header
        onToggleCompleteAll={onToggleCompleteAll}
        onAddItem={onAddItem}
        arrowShow="true"
      ></Header>

      {todoList.listItem.length > 0 &&
        todoList.listItem.map((item, index) => (
          <TodoItem
            key={item.id}
            item={item}
            onDeleteItem={onDeleteItem}
            onCompletedItem={onCompletedItem}
            onFinishEditItem={onFinishEditItem}
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
