const { INTERNAL_SERVER_ERROR, OK } = require('http-status-codes');
const x = require('x-ray')();

const scrape = async (req, res) => {
  const { sUrl, sScope, ...selectors } = req.query;

  try {
    const data = await new Promise((resolve, reject) => {
      x(sUrl, sScope, [selectors])((error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      });
    });

    res.send(OK, data);
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
