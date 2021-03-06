import {CardLabel} from "../common/constants";

const LOCAL_STORAGE_CARDS_KEY = `cards`;

const ActionType = {
  SET_CARDS: `SET_CARDS`,
  ADD_CARD: `ADD_CARD`,
};

const initialState = {
  cards: [],
};

const addCard = (cards, data) => {
  const id = cards.length ? cards[cards.length - 1].id + 1 : 1;
  const newCard = {
    id: id,
    title: data.title,
    description: data.description,
    imageSrc: data.image,
  };

  (id === 1) && (newCard.label = CardLabel.ADVANCED);

  cards.push(newCard);
  localStorage.setItem(LOCAL_STORAGE_CARDS_KEY, JSON.stringify(cards));

  return cards;
};

const getCardsFromStorage = () => JSON.parse(localStorage.getItem(LOCAL_STORAGE_CARDS_KEY));

const ActionCreator = {
  setCards: (cards) => ({
    type: ActionType.SET_CARDS,
    payload: cards ? cards : [],
  }),
  addCard: (card) => ({
    type: ActionType.ADD_CARD,
    payload: card,
  }),
};

const Operation = {
  loadCards: ActionCreator.setCards(getCardsFromStorage()),
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

export {ActionType, ActionCreator, Operation, reducer};
