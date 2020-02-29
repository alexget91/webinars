import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {PAGE_URL_PARAMETER} from "../../common/constants";

const Pagination = (props) => {
  const {elementsCount, elementsPerPage, currentPage = 1, cssClass} = props;
  const pagesCount = Math.ceil(elementsCount / elementsPerPage);

  return <div className={`pagination ${cssClass}`}>
    {new Array(pagesCount).fill(0).map((el, index) => {
      const pageNumber = index + 1;

      return <Link key={index} to={`?${PAGE_URL_PARAMETER}=${pageNumber}`}
        className={`pagination__link${pageNumber === currentPage ? ' active' : ''}`}>{pageNumber}</Link>;
    })}
  </div>;
};

Pagination.propTypes = {
  elementsCount: PropTypes.number.isRequired,
  elementsPerPage: PropTypes.number.isRequired,
  currentPage: PropTypes.number,
  cssClass: PropTypes.string,
};

export default Pagination;
