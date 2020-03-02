import React from "react";
import Catalog from "../catalog/catalog";
import Popup from "../popup/popup";
import CardAdd from "../card-add/card-add";
import {cardsArray} from "../../common/global-prop-types";
import PropTypes from "prop-types";
import BannerBig from "../../../img/banner-big.png";
import BannerSmall from "../../../img/banner-small.jpg";

const BANNER_POSITION = 4;
const LENGTH_FOR_BANNER_INCLUDE = 5;
const BANNER_DATA = {
  title: `Banner`,
  srcBig: BannerBig,
  srcSmall: BannerSmall,
};

class Webinars extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isPopupOpen: false
    };

    this._disablePageScroll = this._disablePageScroll.bind(this);
    this._togglePopup = this._togglePopup.bind(this);
    this._handleCardAdd = this._handleCardAdd.bind(this);
  }

  render() {
    const {cards, currentPage = 1} = this.props;
    const position = cards.length < LENGTH_FOR_BANNER_INCLUDE ? cards.length : BANNER_POSITION;
    const cardsWithBanner = cards.slice();

    cardsWithBanner.splice(position, 0, BANNER_DATA);

    return <>
      <section className="main-header">
        <h1 className="main-header__title">Webinars</h1>
        <p className="main-header__text">Here you can register and take part in educational webinars conducted by the best digital marketing experts.</p>
        <button className="btn" onClick={this._togglePopup}>Add new</button>
      </section>
      <Catalog cards={cardsWithBanner} currentPage={currentPage}/>
      {this.state.isPopupOpen ? <Popup title="Add new" onCloseClick={this._togglePopup}>
        <CardAdd onSubmit={this._handleCardAdd}/>
      </Popup> : null}
    </>;
  }

  _disablePageScroll() {
    document.body.style.overflow = this.state.isPopupOpen ? 'hidden' : null;
    const root = document.querySelector(`#root`);
    if (root) {
      root.style.overflow = this.state.isPopupOpen ? 'scroll' : null;
    }
  }

  _togglePopup() {
    this.setState(
      {isPopupOpen: !this.state.isPopupOpen},
      this._disablePageScroll
    );
  }

  _handleCardAdd(title, description) {
    this.props.onCardAddSubmit(title, description);
    this._togglePopup();
  }
}

Webinars.propTypes = {
  cards: cardsArray.isRequired,
  currentPage: PropTypes.number,
  onCardAddSubmit: PropTypes.func.isRequired,
};

export default Webinars;
