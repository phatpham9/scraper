const { send } = require('micro');
const { get, post, put, del } = require('microrouter');

const wrap = cb => (path, fn) => {
  const newFn = (req, res) => {
    res.send = (...args) => send(res, ...args);

    return fn(req, res);
  };

  return cb(path, newFn);
};

module.exports = {
  get: wrap(get),
  post: wrap(post),
  put: wrap(put),
  del: wrap(del),
};
