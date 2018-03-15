describe("Search", function () {
    const search = require('../../search')
    const testData = search.getNearest(51.5033640, -0.1276250);
    it("returns a JSON", function () {
        expect(typeof testData).toBe('object');
    });
    it("returns correct result", function () {
        expect(testData[0].item_name).toBe("DJI Phantom 4 Drone - 4k Camera in Perfect Condition");
        expect(testData[0].lat).toBe(51.5030975);
        expect(testData[0].lng).toBe(-0.124137104);
        expect(testData[0].item_url).toBe("london/hire-dji-phantom-4-drone--4k-camera-in-perfect-condition-29793150");
        expect(typeof JSON.parse(testData[0].img_urls)).toBe("object");
    });
});