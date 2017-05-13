const _ = require('underscore'); // the real one! :)

// This is what you would do if you liked things to be easy:
// const stringify = JSON.stringify;
// But you don't. So you're going to write it from scratch...



const stringify = function(obj) {
  // your code goes here
  if(typeof obj === 'string') {
    return `"${obj}"`;
  } else if (typeof obj === 'number' || typeof obj === 'boolean' || obj === null) {
    return `${obj}`;
  } else if(_.isArray(obj)) {
    for(let index = 0; index < obj.length; index++) {
      obj[index] = stringify(obj[index]);
    }
    return `[${obj}]`;
  } else if(_.isObject(obj)) {
    let results = '';
    for (let key in obj) {
      results = results + stringify(key) + ':' + stringify(obj[key]);
    }
    return `{${results}}`;
  }
};

module.exports = {
  stringify: stringify
};
