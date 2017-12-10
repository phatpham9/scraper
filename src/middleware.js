const Validation = require('micro-joi');

const { Joi } = require('./helpers/custom-joi');

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
  })
  .unknown(true)
  .rename('s-url', 'sUrl')
  .rename('s-scope', 'sScope'),
}));

module.exports = {
  validate,
};
