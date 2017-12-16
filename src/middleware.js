const Validation = require('micro-joi');

const Joi = require('./helpers/custom-joi');

const DEFAULT_LIMIT = 25;
const MIN_LIMIT = 1;
const MAX_LIMIT = 100;

const validate = Validation(Joi.object({
  query: Joi.object({
    sUrl: Joi
      .string()
      .trim()
      .uri({
        scheme: [
          'http',
          'https',
        ],
      })
      .required(),
    sScope: Joi
      .string()
      .trim()
      .required(),
    sLimit: Joi
      .number()
      .min(MIN_LIMIT)
      .max(MAX_LIMIT)
      .default(DEFAULT_LIMIT),
  })
  .unknown(true)
  .rename('s-url', 'sUrl')
  .rename('s-scope', 'sScope')
  .rename('s-limit', 'sLimit'),
}));

module.exports = {
  validate,
};
