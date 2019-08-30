const { isMD, checkLink, readFile, mdLinks } = require('../index.js');

describe('functions inside index.js', () => {

  it('should return true for a valid .md file', () => {
    expect(isMD('../README.md')).toBe(true);
  });

  it('should return false for an invalid file', () => {
    expect(isMD('../index.js')).toBe(false);
  });

  it('should read the file', () => {
    readFile('./README.md', (data) => {
      expect(typeof data).toBe("string");
    });
  });

  it('should give a valid link',() => {
    expect(checkLink('http://algo.com/2/3/')).toBe('http://algo.com/2/3/');
  });

  it('should return undefined on invalid link',() => {
    expect(checkLink('./some/example.md https://otra-cosa.net/algun-doc.html algún doc')).toBe(undefined);
  });

  it('should print all valid links', () => {
    const links = "http://algo.com/2/3/";
     mdLinks('./Links.md', data => {
       expect(data).toContain(links);
     });
     
  });

});
