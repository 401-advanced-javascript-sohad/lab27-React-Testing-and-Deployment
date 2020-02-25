import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import Counter from '../components/counter/main.js';


describe("<Counter />", () => {
 
  it('is alive in our application', () => {
    let app = shallow(<Counter />);
    expect(app.find('span').exists()).toBeFalsy();
  });



  

  it("negative --> changes state on a click", () => {
    let component = mount(<Counter />);
    let button = component.find("#clickOne");
    button.simulate("click");

    expect(component.state("counter")).toBe(-1);
  });

  it("positive --> changes state on a click", () => {
    let component = mount(<Counter />);
    let button = component.find("#clickTwo");
    button.simulate("click");

    expect(component.state("counter")).toBe(1);
  });



 
  it("renders correctly", () => {
    const tree = renderer.create(<Counter />).toJSON();
    expect(tree).toMatchSnapshot();
  });

});