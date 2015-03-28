'use strict';

var _ = require('lodash');
var chalk = require('chalk');
var styles = _.keys(chalk.styles);

var chalksay = {};

_.forEach(styles, createSayMethod);

function createSayMethod(style) {
  chalksay[style] = function(s) {
    console.log(chalk[style](s));
  };
}

module.exports = chalksay;
