import cards from "../mocks/cards";

const ActionType = {
  SET_CARDS: `SET_CARDS`,
  ADD_CARD: `ADD_CARD`,
};

const initialState = {
  cards: [],
};

const addCard = (cards, newCard) => {
  cards.push({
    id: cards.length ? cards[cards.length - 1].id + 1 : 1,
    title: newCard.title,
    description: newCard.description,
    imageSrc: `pictures/article1.jpg`,
  });

  return cards;
};

const ActionCreator = {
  setCards: (cards) => ({
    type: ActionType.SET_CARDS,
    payload: cards,
  }),
  addCard: (card) => ({
    type: ActionType.ADD_CARD,
    payload: card,
  }),
};

const Operation = {
  loadCards: ActionCreator.setCards(cards),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_CARDS:
      return Object.assign({}, state, {
        cards: action.payload
      });
    case ActionType.ADD_CARD:
      return Object.assign({}, state, {
        cards: addCard(state.cards, action.payload)
      });
  }

  return state;
};

export {ActionCreator, Operation, reducer};
