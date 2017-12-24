const { send } = require('micro');
const { router, get, post, put, del } = require('microrouter');
const cors = require('micro-cors')();
const rateLimit = require('micro-ratelimit');

const rateLimitConfig = {
  limit: 1,     // on request
  window: 1000, // per one second
};

const wrap = cb => (path, fn) => {
  const newFn = (req, res) => {
    res.send = (...args) => send(res, ...args);

    return fn(req, res);
  };

  return cb(path, cors(rateLimit(rateLimitConfig, newFn)));
};

module.exports = {
  router,
  get: wrap(get),
  post: wrap(post),
  put: wrap(put),
  del: wrap(del),
};
