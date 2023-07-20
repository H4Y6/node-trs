function ctrlWrap(ctrl) {
  return async function wrappedCtrl(req, res, next) {
    try {
      await ctrl(req, res);
    } catch (err) {
      next(err);
    }
  };
}

module.exports = ctrlWrap;
