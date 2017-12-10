const scrape = async (req, res) => {
  // scrape data
  const data = {};

  // response
  return res.send(200, data);
};

module.exports = {
  scrape,
};
