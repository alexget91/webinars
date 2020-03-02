import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Webinars from "./webinars";

Enzyme.configure({adapter: new Adapter()});

const wrapper = shallow(<Webinars
  cards={[]}
  currentPage={1}
  onCardAddSubmit={jest.fn()}
/>);

it(`Click on card add button open popup`, () => {
  expect(wrapper.state().isPopupOpen).toEqual(false);

  const cardAddButton = wrapper.find(`.main-header .btn`);
  expect(cardAddButton.length).toBe(1);

  cardAddButton.simulate(`click`);
  expect(wrapper.state().isPopupOpen).toEqual(true);
});
