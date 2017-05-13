const { flattenTreeToArray } = require('./dom-util');
const _ = require('underscore');

const getElementById = function(root, id) {
  // Your code here
  const flatTree = flattenTreeToArray(root);
  const elementId = _.filter(flatTree, node => node.id === id);
  return elementId[0];
};

const getElementsByClassName = function(root, className) {
  // Your code here
  const flatTree = flattenTreeToArray(root);
  const elementClassName = _.filter(flatTree, node => {
    let classArray = [];
    if(node.className !== undefined) {
      classArray = node.className.split(' ');
    }
    const doesExist = classArray.indexOf(className);
    return doesExist !== -1;
  });
  return elementClassName;
};

const getElementsByTagName = function(root, tagName) {
  // Your code here
  const flatTree = flattenTreeToArray(root);
  const elementTagName = _.filter(flatTree, node => node.tagName === tagName);
  return elementTagName;
};

module.exports = {
  getElementById: getElementById,
  getElementsByClassName: getElementsByClassName,
  getElementsByTagName: getElementsByTagName
};
