const PENDING = "pending";
const RESOLVED = "resolved";
const REJECTED = "rejected";
function myPromise(fn) {
  const that = this;
  that.state = PENDING;
  that.value = null;
  that.resolvedCallbacks = [];
  that.rejectedCallbacks = [];

  function resolve(value) {
    if (that.state === PENDING) {
      that.state === RESOLVED;
      that.value === value;
      that.resolvedCallbacks.map((cb) => {
        cb();
      });
    }
  }
  function reject(value) {
    if (that.state === PENDING) {
      that.state === REJECTED;
      that.value === value;
      that.rejectedCallbacks.map((cb) => {
        cb();
      });
    }
  }

  try {
    fn(resolve, reject);
  } catch (error) {
    reject(error);
  }
}

myPromise.prototype.then = function (onFulfilled, onRejected) {
  const that = this;
  onFulfilled = typeof onFulfilled === "function" ? onFulfilled : (v) => v;
  onRejected =
    typeof onRejected === "function"
      ? onRejected
      : (r) => {
          throw r;
        };

  if (that.state === PENDING) {
    this.resolvedCallbacks.push(onFulfilled);
    this.rejectedCallbacks.push(onRejected);
  }
  if (that.state === RESOLVED) {
    onFulfilled(that.value);
  }
  if (that.state === REJECTED) {
    onRejected(that.value);
  }
};
