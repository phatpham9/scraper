const { send } = require('micro');
const { router, get, post, put, del } = require('microrouter');
const cors = require('micro-cors')();

const wrap = cb => (path, fn) => {
  const newFn = (req, res) => {
    res.send = (...args) => send(res, ...args);

    return fn(req, res);
  };

  return cb(path, cors(newFn));
};

module.exports = {
  router,
  get: wrap(get),
  post: wrap(post),
  put: wrap(put),
  del: wrap(del),
};
