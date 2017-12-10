const Joi = require('joi');
const Validation = require('micro-joi');

const validator = Validation(Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),
}));

module.exports = {
  validator,
};
