import { validate } from '../src/index.js';

test('valid ID returns result object', () => {
  const result = validate('0000');
  expect(result).toBeTruthy();
});
