import React from "react";
import Page from "../page/page";
import Webinars from "../webinars/webinars";
import catalogCards from "../../common/data";

const BANNER_POSITION = 4;
const LENGTH_FOR_BANNER_INCLUDE = 5;
const BANNER_DATA = {
  title: `Banner`,
  srcBig: `pictures/banner-big.png`,
  srcSmall: `pictures/banner-small.jpg`,
};

const App = () => {
  const position = catalogCards.length < LENGTH_FOR_BANNER_INCLUDE ? catalogCards.length : BANNER_POSITION;
  catalogCards.splice(position, 0, BANNER_DATA);

  return <Page>
    <Webinars cards={catalogCards}/>
  </Page>;
};

export default App;
