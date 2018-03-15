const search = require('../../search');

describe("Nearest locations", function () {
    const testData = search.getNearest(51.5033640, -0.1276250);
    it("returns an Array", function () {
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

describe("Matching searchTerm", function () {
    const testData = search.getMatchingText("Phantom");
    it("returns an Array", function () {
        expect(typeof testData).toBe('object');
    });
    it("returns correct result", function () {
        expect(testData[0].item_name).toBe("Apple iPad Mini 2 (for use with DJI Phantom)");
        expect(testData[0].lat).toBe(51.4057808);
        expect(testData[0].lng).toBe(-0.0883157998);
        expect(testData[0].item_url).toBe("london/hire-apple-ipad-mini-2-for-use-with-dji-phantom-01400938");
        expect(typeof JSON.parse(testData[0].img_urls)).toBe("object");
    });
});