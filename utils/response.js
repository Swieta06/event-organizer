const response = (message = null, data = null, errors = null) => {
  return {
    message,
    data,
    errors,
  };
};

module.exports = response;