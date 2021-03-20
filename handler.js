'use strict';

module.exports.hello = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Hello world'
      },
      null,
      2
    ),
  };
};


module.exports.goodbye = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'goodbye world'
      },
      null,
      2
    ),
  };
};
