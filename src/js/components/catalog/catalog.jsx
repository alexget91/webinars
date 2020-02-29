import React from "react";
import PropTypes from "prop-types";
import Card from "../card/card";
import Banner from "../banner/banner";
import Pagination from "../pagination/pagination";
import {cardsArray} from "../../common/global-prop-types";

const CARDS_PER_PAGE = 8;

const Catalog = (props) => {
  const {cards, currentPage = 1} = props;
  const currentCards = cards.slice((currentPage - 1) * CARDS_PER_PAGE, currentPage * CARDS_PER_PAGE);

  return <section className="catalog">
    <div className={`catalog__content` + (cards.length > 1 ? `` : ` only-banner`)}>
      {currentCards.map((card) => card.srcBig && card.srcSmall ? <Banner
        key="banner"
        title={card.title}
        srcBig={card.srcBig}
        srcSmall={card.srcSmall}
        url="#"
        cssClass="catalog__card catalog__card--double"
      /> : <Card
        key={card.id}
        id={card.id}
        title={card.title}
        description={card.description}
        imageSrc={card.imageSrc}
        url="#"
        cssClass="catalog__card"
      />)}
    </div>
    <Pagination
      elementsCount={cards.length}
      elementsPerPage={CARDS_PER_PAGE}
      currentPage={currentPage}
      cssClass="catalog__pagination"
    />
  </section>;
};

Catalog.propTypes = {
  cards: cardsArray.isRequired,
  currentPage: PropTypes.number,
};

export default Catalog;
