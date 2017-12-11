require('dotenv').config();

const { NOT_FOUND } = require('http-status-codes');
const rateLimit = require('micro-ratelimit');

const { router, get } = require('./helpers/custom-microrouter');
const { validate } = require('./middleware');
const { scrape } = require('./controller');

const notFound = (req, res) => res.send(NOT_FOUND, {
  code: NOT_FOUND,
  message: 'Not found',
});

const rateLimitConfig = {
  limit: 1,     // on request
  window: 1000, // per one second
};

module.exports = router(
  get('/scrape', rateLimit(rateLimitConfig, validate(scrape))),
  get('/*', notFound),
);
