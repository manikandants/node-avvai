'use strict';

const fs = require('fs');

var ezhuthukkalJson = fs.readFileSync(__dirname + '/ezhuthukkal.json', 'utf8');

var tamizhezhuthukkal = JSON.parse(ezhuthukkalJson);

const ezhuthukkal = (varthai) => {
  var ezhuthukkal = [];
  var sutten = 0;
  var empty = true;
  while(sutten < varthai.length) {
    var ezhuthu = varthai[sutten];
    if ((tamizhezhuthukkal.uyir.indexOf(ezhuthu) >= 0) ||
      (tamizhezhuthukkal.aidham === ezhuthu) ||
      (tamizhezhuthukkal.meiAgaram.indexOf(ezhuthu) >= 0) ||
      (tamizhezhuthukkal.grantham.indexOf(ezhuthu) >= 0)) {
      ezhuthukkal.push(ezhuthu);
      empty = false;
    } else if (tamizhezhuthukkal.uru.indexOf(ezhuthu) >= 0) {
      if (empty) {
        ezhuthukkal.push(ezhuthu);
        empty = false;
      } else {
        ezhuthukkal[ezhuthukkal.length - 1] += ezhuthu;
      }
    } else {
      if (ezhuthu.charCodeAt(0) < 256) {
        ezhuthukkal.push(ezhuthu);
      } else {
        if (empty) {
          ezhuthukkal[ezhuthukkal.length - 1] += ezhuthu;
        } else {
          ezhuthukkal.push(ezhuthu);
          empty = false;
        }
      }
    }
    sutten++;
  }
  return ezhuthukkal;
};

const ezhuthukkalNeelam = (varthai) => {
  return ezhuthukkal(varthai).length;
};

exports.ezhuthukkal = ezhuthukkal;
exports.ezhuthukkalNeelam = ezhuthukkalNeelam;