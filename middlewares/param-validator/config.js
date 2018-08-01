

let customSanitizers = {
  toArray(value) {
    return (typeof value === 'string') ? JSON.parse(value) : value;
  }
};

let customValidators = {
  isArray(value) {
    try {
      return _.isArray((typeof value === 'string') ? JSON.parse(value) : value);
    } catch (error) {
      return false;
    }
  }
}

module.exports = {
  customSanitizers,customValidators
}
