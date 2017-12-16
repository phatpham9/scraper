const { INTERNAL_SERVER_ERROR, OK } = require('http-status-codes');

const x = require('./helpers/promise-x-ray');

const scrape = async (req, res) => {
  const { sUrl, sSelector, sScope, sLimit, ...selectors } = req.query;

  try {
    if (sSelector) {
      const data = await x(sUrl, sSelector);

      res.send(OK, data);
    } else {
      const data = await x(sUrl, sScope, [selectors]);

      res.send(OK, data.slice(0, sLimit));
    }
  } catch (error) {
    res.send(INTERNAL_SERVER_ERROR, {
      code: INTERNAL_SERVER_ERROR,
      message: error.message,
    });
  }
};

module.exports = {
  scrape,
};
