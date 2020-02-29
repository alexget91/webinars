import PropTypes from "prop-types";
import {CardLabel} from "./constants";

const cardLabel = PropTypes.oneOf(Object.values(CardLabel));

const cardData = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  imageSrc: PropTypes.string.isRequired,
  label: cardLabel,
};

const cardFull = Object.assign({}, cardData, {
  url: PropTypes.string.isRequired,
  cssClass: PropTypes.string,
});

const bannerData = {
  title: PropTypes.string,
  srcBig: PropTypes.string.isRequired,
  srcSmall: PropTypes.string.isRequired,
};

const bannerFull = Object.assign({}, bannerData, {
  url: PropTypes.string.isRequired,
  cssClass: PropTypes.string,
});

const cardsArray = PropTypes.arrayOf(
  PropTypes.oneOfType([
    PropTypes.exact(cardData),
    PropTypes.exact(bannerData)
  ])
);

export {cardLabel, cardData, cardFull, bannerData, bannerFull, cardsArray};
