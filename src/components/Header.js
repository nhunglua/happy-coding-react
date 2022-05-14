import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import arrow from "../arrow.png";
import { ENTER_KEY_CODE } from "../constant";

function Header(props) {
  const [title, setTitle] = useState("");

  const handleOnChangeInput = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    if (title.length && event.keyCode === ENTER_KEY_CODE) {
      props.onAddItem({ title, isComplete: false });

      setTitle("");
    }
  };

  const toggleCompleteAll = () => {
    const { onToggleCompleteAll } = props;

    if (typeof toggleCompleteAll === "function") {
      onToggleCompleteAll();
    }
  };

  const renderArrow = () => {
    return <img src={arrow} alt="arrow" />;
  };

  return (
    <li className="header">
      <button onClick={toggleCompleteAll} className="active">
        {renderArrow()}
      </button>

      <input
        name="title"
        value={title}
        placeholder="What needs to be done"
        onChange={handleOnChangeInput}
        onKeyUp={handleSubmit}
      />
    </li>
  );
}

export default Header;
