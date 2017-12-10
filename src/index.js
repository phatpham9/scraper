require('dotenv').config();
const { router } = require('microrouter');

const { get } = require('./helpers.js');
const { scrape } = require('./scraper.controller.js');
const { validator } = require('./scraper.middleware.js');

const notfound = (req, res) => res.send(404, 'Not found');

module.exports = router(
  get('/scrape', validator(scrape)),
  get('/*', notfound),
);
