var assert = require("assert");
var Calculate = require("../index.js");

describe("Calculate", () => {
  describe(".factorial", () => {
    it("Will test if the output of 5! is equal to 120", () => {
      // Setup
      const expected = 120;
      const input = 5;
      // Exercise
      const result = Calculate.factorial(input);
      // Verification
      assert.strictEqual(result, expected);
    });
    it("Will test if the output is other than 5", () => {
      // Setup
      const expected = 6;
      const input = 3;
      // Exercise
      const result = Calculate.factorial(input);
      // Verification
      assert.strictEqual(result, expected);
    });
    it("returns 1 when you pass in 0.", () => {
      // Setup
      const input = 0;
      const expected = 1;
      // Exercise
      const result = 1;
      // Verification
      assert.strictEqual(result, expected);
    });
  });
});
