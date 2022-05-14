import React, { useState } from "react";
import PropTypes from "prop-types";

Footer.propTypes = {};

function Footer(props) {
  const { total, countCompleted } = props;
  const [filterButton, setFilterButton] = useState("all");

  const renderClearButton = () => {
    return countCompleted ? (
      <button onClick={onClearCompletedClick}> Clear completed</button>
    ) : null;
  };

  const buttons = [
    { label: "All", filter: "all" },
    { label: "Active", filter: "active" },
    { label: "Completed", filter: "completed" },
  ];

  const onChangeFilter = (filter) => {
    const { onChangeFilter } = props;

    onChangeFilter(filter);
    setFilterButton(filter);
  };

  const onClearCompletedClick = () => {
    const { onClearCompletedClick } = props;

    if (typeof onClearCompletedClick === "function") {
      onClearCompletedClick();
    }
  };

  return (
    <li className="footer">
      <div className="footer-left">
        <div> {total} item left</div>

        {buttons.map((button) => (
          <button
            key={button.filter}
            className={`${filterButton === button.filter ? "active" : ""}`}
            onClick={() => onChangeFilter(button.filter)}
          >
            {button.label}
          </button>
        ))}
      </div>

      {renderClearButton()}
    </li>
  );
}

export default Footer;
