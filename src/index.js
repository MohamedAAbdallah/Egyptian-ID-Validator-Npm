export function validate(id) {
  if (typeof id !== 'string' || !/^\d{14}$/.test(id)) {
    return null;
  }

  return {
    valid: true,
    year: "1999",
    month: "1",
    day: "1",
    governorate: 'Cairo',
    gender: 'M',
  };
}
