"use strict";
exports.__esModule = true;
var Queue = /** @class */ (function () {
    function Queue() {
        this.count = 0;
        this.lowestCount = 0;
        this.items = {};
    }
    Queue.prototype.enqueue = function (item) {
        this.items[this.count] = item;
        this.count++;
    };
    Queue.prototype.size = function () {
        return this.count - this.lowestCount;
    };
    Queue.prototype.clear = function () {
        this.count = 0;
        this.items = {};
        this.lowestCount = 0;
    };
    Queue.prototype.dequeue = function () {
        // 先进先出
        if (this.isEmpty()) {
            return undefined;
        }
        var result = this.items[this.lowestCount];
        delete this.items[this.lowestCount];
        this.lowestCount++;
        return result;
    };
    Queue.prototype.toString = function () {
        if (this.isEmpty()) {
            return "";
        }
        var objString = "" + this.items[this.lowestCount];
        for (var i = 1 + this.lowestCount; i < this.count; i++) {
            objString = objString + "," + this.items[i];
        }
        return objString;
    };
    Queue.prototype.isEmpty = function () {
        return this.count - this.lowestCount === 0;
    };
    return Queue;
}());
exports["default"] = Queue;
