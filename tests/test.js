const assert = require("chai").assert;
const myApp = require("../src/main.js");

describe('RainDrops', () => {
    describe("handle valid input", function(){
        it("converts 3", function() {
            assert.equal(myApp.RainDrops(3), "Pling");
          });
          it("converts 6", function() {
            assert.equal(myApp.RainDrops(6), "Pling");
          });
          it("converts 28", function() {
            assert.equal(myApp.RainDrops(28), "Plong");
          });
          it("converts 34", function() {
            assert.equal(myApp.RainDrops(34), "34");
          });
          it("converts 9", function() {
            assert.equal(myApp.RainDrops(9), "Pling");
          });
          it("converts 49", function() {
            assert.equal(myApp.RainDrops(49), "Plong");
          });
          it("converts 105", function() {
            assert.equal(myApp.RainDrops(105), "PlingPlangPlong");
          });
          it("converts 12121", function() {
            assert.equal(myApp.RainDrops(12121), "12121");
          });
          it("converts empty to undefined", function() {
            assert.equal(myApp.RainDrops("undefined"), "undefined");
          });
          it("converts 21", function() {
            assert.equal(myApp.RainDrops(21), "PlingPlong");
          });
        
          
        });
});
