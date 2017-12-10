require('dotenv').config();

const { NOT_FOUND } = require('http-status-codes');

const { router, get } = require('./helpers/custom-microrouter');
const { validate } = require('./middleware');
const { scrape } = require('./controller');

const notFound = (req, res) => res.send(NOT_FOUND, {
  code: NOT_FOUND,
  message: 'Not found',
});

module.exports = router(
  get('/scrape', validate(scrape)),
  get('/*', notFound),
);
