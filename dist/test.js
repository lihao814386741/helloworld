var SimpleCounter = /** @class */ (function () {
    function SimpleCounter() {
    }
    SimpleCounter.prototype.count = function () {
        var count = 4;
        for (var i = 1; i <= 8; i++) {
            document.write(i.toString() + '<br>');
        }
        console.log("All done.");
    };
    return SimpleCounter;
}());
var count = new SimpleCounter();
count.count();
//# sourceMappingURL=test.js.map