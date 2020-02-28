import React from "react";
import {cardFull} from "../../common/global-prop-types";

const Card = (props) => {
  const {title, text, imageSrc, label, url, cssClass} = props;

  return <article className={`card ` + cssClass}>
    <a href={url}>
      <img src={imageSrc} className="card__image" alt={title}/>
    </a>
    <div className="card__content">
      <h2 className="card__title">
        <a href={url}>{title}</a>
      </h2>
      <p className="card__text">{text}</p>
      <div className="card__footer">
        {label ? <div className="label">{label}</div> : null}
      </div>
    </div>
  </article>;
};

Card.propTypes = cardFull;

export default Card;
