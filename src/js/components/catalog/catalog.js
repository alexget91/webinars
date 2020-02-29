import React from "react";
import Card from "../card/card";
import Banner from "../banner/banner";
import Pagination from "../pagination/pagination";
import {cardsArray} from "../../common/global-prop-types";

const Catalog = (props) => {
  const {cards} = props;

  return <section className="catalog">
    <div className="catalog__content">
      {cards.map((card) => card.srcBig && card.srcSmall ? <Banner
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
    <Pagination cssClass="catalog__pagination"/>
  </section>;
};

Catalog.propTypes = {
  cards: cardsArray.isRequired
};

export default Catalog;
