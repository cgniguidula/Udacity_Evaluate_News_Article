import { getWebData } from "../src/server/index"

describe("Testing the form submit functionality", () => {
    test("Testing the function exists", () => {
           expect(getWebData).toBeDefined();
    })

    test("Testing errors are caught when fetching from API", () => {
        return getWebData("www.", "This URL doesn't work", null)
            .catch(e => expect(e.message)
            .toBe("Only absolute URLs are supported"));
    })
});
