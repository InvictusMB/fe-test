function validate(schema, obj) {
  const errors = Object.keys(schema).reduce((errors, key) => {
    const validator = validators[schema[key]];
    if (!validator(obj[key])) {
      errors.push(`Expected field "${key}" to be of type "${schema[key]}".`);
    }
    return errors;
  }, []);
  printErrors(errors);
  return errors.length === 0;
}

const validators = {
  'string': v => typeof v === 'string',
  'number': v => typeof v === 'number',
  'array': v => Array.isArray(v),
  'object': v => typeof v === 'object' && !Array.isArray(v),
  'boolean': v => typeof v === 'boolean',
};

function printErrors(errors) {
  errors.forEach(e => console.log(e));
}

module.exports = {
  validate,
}
