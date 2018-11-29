/**
 * eslint-plugin-kaola - ESLint plugin for Kaola
 */

'use strict';

var requireIndex = require("requireindex");

// import all rules in /rules
module.exports.rules = requireIndex(__dirname + "/rules");