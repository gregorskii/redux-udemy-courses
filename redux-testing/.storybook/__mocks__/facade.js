import renderer from 'react-test-renderer';

const { it, expect } = global;

export const snapshot = (name, story) => {
  it(name, () => {
    const tree = renderer.create(story).toJSON();
    expect(tree).toMatchSnapshot();
  });
};

export const storiesOf = function storiesOf() {
  const api = {};
  let story;
  api.add = (name, func) => {
    story = func();
    snapshot(name, story);
    return api;
  };
  api.addWithInfo = (name, func) => {
    story = func();
    snapshot(name, story);
    return api;
  };
  return api;
};
export const action = () => {};

export const linkTo = () => {};

export const specs = (spec) => {
  spec();
};

export const chai = global.chai;
export const describe = global.describe;
export const beforeEach = global.beforeEach;
export const afterEach = global.afterEach;
export const fit = global.fit;
export const xit = global.xit;
export const xdescribe = global.xdescribe;
export const after = () => {};
export const before = () => {};
