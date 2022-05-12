import React from "react";
import PropTypes from "prop-types";

Footer.propTypes = {};

function Footer(props) {
  const renderClearButton = () => {
    return <button> Clear completed</button>;
  };

  return (
    <li className="footer">
      <div className="footer-left">
        <div>8 item left</div>

        <div>
          <button>button.label</button>
        </div>
      </div>

      {renderClearButton()}
    </li>
  );
}

export default Footer;
