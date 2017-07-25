'use strict';

const ezhuthu = require('../ezhuthu/ezhuthu');

const thiruppu = (varthai) => {
  return ezhuthu.ezhuthukkal(varthai).reverse().join('');
};

const pinpiya = (varthai) => {
  return thiruppu(varthai) === varthai;
};

exports.thiruppu = thiruppu;
exports.pinpiya = pinpiya;
