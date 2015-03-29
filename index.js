'use strict';

var _ = require('lodash');
var chalk = require('chalk');
var styles = _.keys(chalk.styles);

var chalksay = {};

// Dynamically adds methods to the chalksay module for every chalk style.
// The created method calls the chalk style on each argument passed to it,
// and applies the styled arguments to console.log.
_.forEach(styles, createSayMethod);

function createSayMethod(style) {
  function stylize(arg) {
    return chalk[style](arg);
  }

  chalksay[style] = function() {
    var args = _.toArray(arguments);
    var stylizedArgs = _.map(args, stylize);
    console.log.apply(undefined, stylizedArgs);
  };
}

module.exports = chalksay;
