import React from "react";
import {Link} from "react-router-dom";
import {cardFull} from "../../common/global-prop-types";

const Card = (props) => {
  const {title, description, imageSrc, label, url, cssClass} = props;

  return <article className={`card ${cssClass}`}>
    <Link to={url}>
      <img src={imageSrc} className="card__image" alt={title}/>
    </Link>
    <div className="card__content">
      <h2 className="card__title">
        <Link to={url}>{title}</Link>
      </h2>
      <p className="card__text">{description}</p>
      <div className="card__footer">
        {label ? <div className="label">{label}</div> : null}
      </div>
    </div>
  </article>;
};

Card.propTypes = cardFull;

export default Card;
