var BottomNavigation = require("nativescript-bottom-navigation").BottomNavigation;
var bottomNavigation = new BottomNavigation();

describe("greet function", function() {
    it("exists", function() {
        expect(bottomNavigation.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(bottomNavigation.greet()).toEqual("Hello, NS");
    });
});