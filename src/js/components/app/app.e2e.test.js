import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {MemoryRouter} from "react-router-dom";
import {App} from "./app";
import Webinars from "../webinars/webinars";
import PageNotFound from "../page-not-found/page-not-found";

Enzyme.configure({adapter: new Adapter()});

jest.mock(`../webinars/webinars`, () => jest.fn().mockReturnValue(null));
jest.mock(`../page-not-found/page-not-found`, () => jest.fn().mockReturnValue(null));

const cards = [];
const handleCardAddSubmit = jest.fn();

describe(`Routes works correctly`, () => {
  it(`To main page without parameters`, () => {
    mount(<MemoryRouter initialEntries={[`/`]}>
      <App
        cards={cards}
        onCardAddSubmit={handleCardAddSubmit}
      />
    </MemoryRouter>);

    expect(Webinars).toHaveBeenCalledTimes(1);
    expect(Webinars).toHaveBeenCalledWith({
      cards: cards,
      currentPage: 1,
      onCardAddSubmit: handleCardAddSubmit,
    }, {});
  });

  it(`To main page with page number`, () => {
    const pageNumber = 2;

    mount(<MemoryRouter initialEntries={[`/?page=${pageNumber}`]}>
      <App
        cards={cards}
        onCardAddSubmit={handleCardAddSubmit}
      />
    </MemoryRouter>);

    expect(Webinars).toHaveBeenCalledTimes(2);
    expect(Webinars).toHaveBeenCalledWith({
      cards: cards,
      currentPage: pageNumber,
      onCardAddSubmit: handleCardAddSubmit,
    }, {});
  });

  it(`To page not found message`, () => {
    mount(<MemoryRouter initialEntries={[`/foo`]}>
      <App
        cards={cards}
        onCardAddSubmit={handleCardAddSubmit}
      />
    </MemoryRouter>);

    expect(PageNotFound).toHaveBeenCalledTimes(1);
  });
});
