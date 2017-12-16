const OriginJoi = require('joi');

const Joi = OriginJoi.extend(joi => ({
  name: 'customArray',
  base: joi.array(),
  language: {
    customArray: 'needs to be separated by delimiters (comma by default)',
  },
  coerce: (value, state, { delimiter = ',' }) => value.split(delimiter),
  rules: [{
    name: 'customArray',
    // eslint-disable-next-line no-unused-vars
    setup: (params) => {},
  }],
}));

module.exports = Joi;
