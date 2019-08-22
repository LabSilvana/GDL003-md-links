const {filePath} = require('../');

describe('filePath', () => {

  it('should return true for a valid .md file', () => {
    expect(checkMdFile('../README.md')).toBe(true);
  });

  it('should return false for an invalid file', () => {
    expect(checkMdFile('../index.js')).toBe(false);
  });
});
