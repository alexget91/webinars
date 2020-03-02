import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Popup from "./popup";

Enzyme.configure({adapter: new Adapter()});

const handleCloseClick = jest.fn();
const wrapper = shallow(<Popup
  title={``}
  onCloseClick={handleCloseClick}
/>);

it(`Click on close button calls callback`, () => {
  const closeButton = wrapper.find(`.popup__close`);
  expect(closeButton.length).toBe(1);

  closeButton.simulate(`click`);
  expect(handleCloseClick).toHaveBeenCalledTimes(1);
});

it(`Click on overlay calls callback`, () => {
  const overlay = wrapper.find(`.popup__overlay`);
  expect(overlay.length).toBe(1);

  overlay.simulate(`click`);
  expect(handleCloseClick).toHaveBeenCalledTimes(2);
});
