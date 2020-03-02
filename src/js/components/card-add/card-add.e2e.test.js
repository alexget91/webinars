import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import CardAdd from "./card-add";

Enzyme.configure({adapter: new Adapter()});

const handleSubmit = jest.fn();
const wrapper = shallow(<CardAdd onSubmit={handleSubmit}/>);

it(`Form submit calls callback with correct data`, () => {
  wrapper.setState({
    image: `image`,
    title: `title`,
    description: `description`,
    isSubmitEnabled: true,
  });

  const form = wrapper.find(`.form`);
  expect(form.length).toBe(1);

  form.simulate(`submit`, {
    preventDefault: () => {},
  });
  expect(handleSubmit).toHaveBeenCalledTimes(1);
  expect(handleSubmit).toHaveBeenCalledWith({
    image: `image`,
    title: `title`,
    description: `description`,
  });
});
