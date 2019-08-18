const {mdLinks, checkAbsolute, checkMdFile} = require('../');

describe('mdLinks', () => {

  it('should return true for a valid .md file', () => {
    expect(checkMdFile('../README.md')).toBe(true);
  });

  it('should return false for an invalid file', () => {
    expect(checkMdFile('../index.js')).toBe(false);
  });

  it('should check if path is absolute', () => {
    expect(checkAbsolute('./index.js')).toBe(false);
    expect(checkAbsolute('/index.js')).toBe(true);
  });
});
