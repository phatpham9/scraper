const Validation = require('micro-joi');

const { Joi } = require('./helpers/custom-joi');

const INVALID_SELECTORS = ['s-url', 's-scope', 's-selectors'];
const MAX_SELECTORS = 10;

const validate = Validation(Joi.object({
  query: Joi.object({
    's-url': Joi
      .string()
      .trim()
      .uri({
        scheme: [
          'http',
          'https',
        ],
      })
      .required(),
    's-scope': Joi
      .string()
      .trim()
      .required(),
    's-selectors': Joi
      .customArray()
      .items(Joi.string().trim().invalid(INVALID_SELECTORS))
      .sparse(false)
      .unique()
      .max(MAX_SELECTORS),
  }),
}));

module.exports = {
  validate,
};
