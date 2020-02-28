import React from "react";
import Catalog from "../catalog/catalog";
import Popup from "../popup/popup";
import CardAdd from "../card-add/card-add";
import {cardsArray} from "../../common/global-prop-types";

class Webinars extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isPopupOpen: false
    };

    this._togglePopup = this._togglePopup.bind(this);
    this._handleCardAdd = this._handleCardAdd.bind(this);
  }

  render() {
    const {cards} = this.props;

    return <>
      <section className="main-header">
        <h1 className="main-header__title">Webinars</h1>
        <p className="main-header__text">Here you can register and take part in educational webinars conducted by the best digital marketing experts.</p>
        <button className="btn" onClick={this._togglePopup}>Add new</button>
      </section>
      <Catalog cards={cards}/>
      {this.state.isPopupOpen ? <Popup title="Add new" onCloseClick={this._togglePopup}>
        <CardAdd onSubmit={this._handleCardAdd}/>
      </Popup> : null}
    </>;
  }

  _togglePopup() {
    this.setState(
      {isPopupOpen: !this.state.isPopupOpen},
      () => document.body.style.overflow = this.state.isPopupOpen ? 'hidden' : null
    );
  }

  _handleCardAdd(title, description) {
    console.log(title);
    console.log(description);
  }
}

Webinars.propTypes = {
  cards: cardsArray.isRequired
};

export default Webinars;
