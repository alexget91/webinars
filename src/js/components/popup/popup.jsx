import React from "react";
import PropTypes from "prop-types";

const Popup = (props) => {
  const {title, children, onCloseClick} = props;

  return <div className="popup">
    <div className="popup__overlay" onClick={onCloseClick}/>
    <div className="popup__body">
      <div className="popup__close" onClick={onCloseClick}/>
      <h2 className="popup__title">{title}</h2>
      {children}
    </div>
  </div>;
};

Popup.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element,
  onCloseClick: PropTypes.func,
};

export default Popup;
