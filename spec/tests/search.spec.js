describe("Search", function () {
    const Search = require('../../search')
    it("returns a string", function () {
        expect(typeof Search()).toBe('string');
    });
    it("returns hello world", function () {
        expect(Search()).toBe('Hello World');
    });
});