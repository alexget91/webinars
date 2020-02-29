import React from "react";
import {connect} from "react-redux";
import {Route, Switch} from "react-router-dom";
import Page from "../page/page";
import Webinars from "../webinars/webinars";
import {cardsArray} from "../../common/global-prop-types";
import {ActionCreator} from "../../reducer/reducer";
import PropTypes from "prop-types";
import {PAGE_URL_PARAMETER} from "../../common/constants";

const App = (props) => {
  const {cards, onCardAddSubmit} = props;

  return <Page>
    <Switch>
      <Route path={`/`} exact render={(routeProps) => {
        const pageNumber = parseInt(new URLSearchParams(routeProps.location.search).get(PAGE_URL_PARAMETER));
        return <Webinars
          cards={cards}
          currentPage={pageNumber ? pageNumber : 1}
          onCardAddSubmit={onCardAddSubmit}
        />;
      }}/>

      <Route render={() => `Page not found!`}/>
    </Switch>
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
