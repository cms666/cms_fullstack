"use strict";
var MinStack = /** @class */ (function () {
    function MinStack() {
        this.items = {};
        this.count = 0;
    }
    MinStack.prototype.push = function (item) {
        this.items[this.count] = item;
        this.count++;
    };
    MinStack.prototype.pop = function () {
        if (this.isEmpty()) {
            return undefined;
        }
        this.count--;
        var result = this.items[this.count];
        delete this.items[this.count];
        return result;
    };
    MinStack.prototype.top = function () {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.count - 1];
    };
    MinStack.prototype.getMin = function () {
        if (this.isEmpty()) {
            return undefined;
        }
        var min = this.items[0];
        for (var i = 1; i < this.count; i++) {
            if (min > this.items[i]) {
                min = this.items[i];
            }
        }
        return min;
    };
    MinStack.prototype.isEmpty = function () {
        return this.count === 0;
    };
    return MinStack;
}());
var minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin());
minStack.pop();
minStack.top();
console.log(minStack.getMin());
