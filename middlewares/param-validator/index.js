const sanitizeMap = {
  isInt: 'toInt',
  isFloat: 'toFloat',
  isArray: 'toArray'
};

module.exports = async function (schema, req) {
  let newSchema = _.cloneDeep(schema);
  req.check(newSchema);
  let result = await req.getValidationResult();
  if (!result.isEmpty()) {
    let errors = result.array();
    return Promise.reject(`参数${errors[0].param}验证错误`);
  } else {
    for (let key in schema) {
      for (let sanitizeKey in sanitizeMap) {
        if (schema[key][sanitizeKey]) {
          req.sanitize(key)[sanitizeMap[sanitizeKey]]();
        }
      }
    }
    return {};
  }
}


















