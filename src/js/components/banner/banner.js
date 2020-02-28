import React from "react";
import PropTypes from "prop-types";

const Banner = (props) => {
  const {title, srcBig, srcSmall, url, cssClass} = props;

  return <div className={`card card--double ` + cssClass}>
    <a href={url} className="card__double-inner">
      <div className="catalog__mobile-hidden">
        <img src={srcBig} alt={title}/>
      </div>
      <div className="catalog__desktop-hidden">
        <img src={srcSmall} alt={title}/>
      </div>
    </a>
  </div>;
};

Banner.propTypes = {
  title: PropTypes.string,
  srcBig: PropTypes.string.isRequired,
  srcSmall: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  cssClass: PropTypes.string,
};

export default Banner;
