import React from "react";
import PropTypes from "prop-types";

const Popup = (props) => {
  const {title, children} = props;

  return <div className="popup">
    <div className="popup__body">
      <div className="popup__close"/>
      <h2 className="popup__title">{title}</h2>
      {children}
    </div>
  </div>;
};

Popup.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element,
};

export default Popup;
