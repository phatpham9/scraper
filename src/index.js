require('dotenv').config();

const { router, get } = require('./helpers/custom-microrouter');
const { validate } = require('./middleware');
const { scrape } = require('./controller');

const notFound = (req, res) => res.send(404, 'Not found');

module.exports = router(
  get('/scrape', validate(scrape)),
  get('/*', notFound),
);
