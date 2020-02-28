import React from "react";
import PropTypes from "prop-types";
import {cardLabel} from "../../common/global-prop-types";

const Card = (props) => {
  const {title, text, imageSrc, label, url, cssClass} = props;

  return <a href={url} className={`card ` + cssClass}>
    <img src={imageSrc} className="card__image" alt={title}/>
    <div className="card__content">
      <h2 className="card__title">{title}</h2>
      <p className="card__text">{text}</p>
      <div className="card__footer">
        {label ? <div className="label">{label}</div> : null}
      </div>
    </div>
  </a>;
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  imageSrc: PropTypes.string.isRequired,
  label: cardLabel,
  url: PropTypes.string.isRequired,
  cssClass: PropTypes.string,
};

export default Card;
