import {ActionType, ActionCreator, reducer} from "./reducer";

describe(`Action creators works correctly`, () => {
  it(`Action creator for set cards returns correct action`, () => {
    expect(ActionCreator.setCards([{foo: `bar`}])).toEqual({
      type: ActionType.SET_CARDS,
      payload: [{foo: `bar`}]
    });
  });

  it(`Action creator for add card returns correct action`, () => {
    expect(ActionCreator.addCard({foo: `bar`})).toEqual({
      type: ActionType.ADD_CARD,
      payload: {foo: `bar`}
    });
  });
});

describe(`Reducer works correctly`, () => {
  const mockInitialState = {
    cards: [{id: 0}, {id: 1}],
  };

  it(`Reducer without action should return current state`, () => {
    expect(reducer(mockInitialState, {})).toEqual(mockInitialState);
  });

  it(`Reducer should set given value as cards`, () => {
    expect(reducer(mockInitialState, {
      type: ActionType.SET_CARDS,
      payload: [{foo: `bar`}]
    })).toEqual({
      cards: [{foo: `bar`}],
    });
  });

  it(`Reducer should add given value to cards`, () => {
    expect(reducer(mockInitialState, {
      type: ActionType.ADD_CARD,
      payload: {
        title: `title`,
        description: `description`,
        image: `imageSrc`,
      }
    })).toEqual({
      cards: [{id: 0}, {id: 1}, {
        id: 2,
        title: `title`,
        description: `description`,
        imageSrc: `imageSrc`,
      }],
    });
  });
});
