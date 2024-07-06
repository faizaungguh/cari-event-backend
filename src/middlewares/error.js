const { ResponseError } = require('../errors/response-error');

const errorMiddleware = async (err, req, res, next) => {
  if (!err) {
    // if no error, Lanjut
    next();
    return;
  }

  if (err instanceof ResponseError) {
    res
      .status(err.status)
      .json({
        errors: err.message,
      })
      .end();
  } else {
    res
      .status(500)
      .json({
        errors: err.message,
      })
      .end();
  }
};

module.exports = { errorMiddleware };
