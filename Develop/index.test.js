 
const { myFunction } = require('./index');
 
test('Testing myFunction', () => {
 
  const input = 2;
  const expectedOutput = 4;

 
  const result = myFunction(input);

 
  expect(result).toBe(expectedOutput);
});
