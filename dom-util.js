
const visitAllNodes = function(node, callback) {
  // Hint: read about DOM nodes and node methods here: https://developer.mozilla.org/en-US/docs/Web/API/Node
  // Your code here
  callback(node);
  if(node.childNodes.length > 0) {
    node.childNodes.forEach(childNode => visitAllNodes(childNode, callback));
  }
};

const flattenTreeToArray = function(node) {
  // Hint: Use visitAllNodes()
  // Your code here
  let results = [];
  visitAllNodes(node, (el)=> {
    results.push(el);
  });
  return results;
};

module.exports = {
  visitAllNodes: visitAllNodes,
  flattenTreeToArray: flattenTreeToArray
};
