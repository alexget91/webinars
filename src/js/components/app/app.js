import React from "react";
import {connect} from "react-redux";
import Page from "../page/page";
import Webinars from "../webinars/webinars";
import {cardsArray} from "../../common/global-prop-types";
import {ActionCreator} from "../../reducer/reducer";
import PropTypes from "prop-types";

const App = (props) => {
  const {cards, onCardAddSubmit} = props;

  return <Page>
    <Webinars cards={cards} onCardAddSubmit={onCardAddSubmit}/>
  </Page>;
};

App.propTypes = {
  cards: cardsArray.isRequired,
  onCardAddSubmit: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  cards: state.cards
});

const mapDispatchToProps = (dispatch) => ({
  onCardAddSubmit: (card) => dispatch(ActionCreator.addCard(card)),
});

export {App};

export default connect(mapStateToProps, mapDispatchToProps)(App);
