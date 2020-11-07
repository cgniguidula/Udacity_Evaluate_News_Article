var requestPost = require('../src/server/index')
var testingFunction = requestPost.getWebData;

describe("Testing the form submit functionality", () => {
    test("Testing the function exists", () => {
           expect(testingFunction).toBeDefined();
    })

    test("Testing errors are caught when fetching from API", () => {
        return testingFunction("www.", "This URL doesn't work", null)
            .catch(e => expect(e.message)
            .toBe("Only absolute URLs are supported"));
    })
});
