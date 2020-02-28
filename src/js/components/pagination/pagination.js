import React from "react";
import PropTypes from "prop-types";

const Pagination = (props) => {
  const {cssClass} = props;

  return <div className={`pagination ` + cssClass}>
    <a href="#" className="pagination__link active">1</a>
    <a href="#" className="pagination__link">2</a>
    <a href="#" className="pagination__link">3</a>
    <a href="#" className="pagination__link">4</a>
  </div>;
};

Pagination.propTypes = {
  cssClass: PropTypes.string,
};

export default Pagination;
