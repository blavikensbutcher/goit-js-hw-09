!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var r={id:e,exports:{}};return o[e]=r,n.call(r.exports,r,r.exports),r.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,n){t[e]=n},n.parcelRequired7c6=r);var u=r("6JpON"),i={form:document.querySelector(".form"),delay:document.querySelector('[name="delay"]'),step:document.querySelector('[name="step"]'),amount:document.querySelector('[name="amount"]')},a=0,l=0;function c(e,n){var o=Math.random()>.3;return new Promise((function(t,r){setTimeout((function(){o?t({position:e,delay:n}):r({position:e,delay:n})}),n)}))}i.form.addEventListener("submit",(function(n){n.preventDefault(),a=Number(i.delay.value),l=Number(i.step.value);for(var o=1;o<=i.amount.value;o++)c(o,a).then((function(n){var o=n.position,t=n.delay;return e(u).Notify.success("✅ Fullfiles promise ".concat(o," in ").concat(t,"ms"))})).catch((function(n){var o=n.position,t=n.delay;return e(u).Notify.failure("❌ Rejected promise ".concat(o," in ").concat(t,"ms"))})),a+=l}))}();
//# sourceMappingURL=03-promises.b031a2b1.js.map