export const validateData = (number, name, email) => {
  const errors = {};

  if (number === undefined || number === null || number === '') {
    errors.number = 'Number parameter is missing';
  } else if (typeof number !== 'number') {
    errors.number = 'Number must be a numeric value';
  }

  if (!name) {
    errors.name = 'Name parameter is missing';
  } else if (typeof name !== 'string') {
    errors.name = 'Name must be a string';
  }

  if (!email) {
    errors.email = 'Email parameter is missing';
  } else if (typeof email !== 'string') {
    errors.email = 'Email must be a string';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = 'Invalid email format';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};
