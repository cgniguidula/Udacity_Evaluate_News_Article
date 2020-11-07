import { isEnglish } from "../src/client/js/inputChecker"

describe("Testing the isEnglish function", () => {
    
    test("Testing if function is defined", () => {
           expect(isEnglish).toBeDefined();
    })

    test("Testing non-English characters", () => {
        expect(isEnglish("漢")).toBe(false);
        expect(isEnglish("")).toBe(false);
        expect(isEnglish("Hola señor")).toBe(false);
    })

    test("Testing non-string input", () => {
        expect(isEnglish(true)).toBe(true);
        expect(isEnglish(123.0)).toBe(true);
        expect(isEnglish(null)).toBe(false);
    })

});