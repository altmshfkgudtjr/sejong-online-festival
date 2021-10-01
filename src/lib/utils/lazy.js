var waiting = false;
var timer;
/**
 * Throttle
 * @param {Function} fn
 * @param {number} delay 딜레이 시간
 */
export function throttle(fn, limit = 100) {
  return function () {
    const context = this;
    const args = arguments;

    clearTimeout(timer);
    timer = setTimeout(function () {
      fn.apply(context, args);
    }, limit);

    if (!waiting) {
      fn.apply(context, args);
      waiting = true;
      setTimeout(() => {
        waiting = false;
      }, limit);
    }
    2;
  };
}

var timeout;
/**
 * Debounce
 * @param {Function} fn
 * @param {number} delay 딜레이 시간
 */
export function debounce(callback, limit = 100) {
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      callback.apply(this, args);
    }, limit);
  };
}
