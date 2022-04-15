"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManualPromise = void 0;
class ManualPromise extends Promise {
    constructor() {
        let tmpResolve;
        let tmpReject;
        super((resolve, reject) => {
            tmpResolve = resolve;
            tmpReject = reject;
        });
        this.resolve = tmpResolve;
        this.reject = tmpReject;
    }
    // https://stackoverflow.com/questions/48158730/extend-javascript-promise-and-resolve-or-reject-it-inside-constructor/48159603
    // https://tc39.es/ecma262/#sec-promise.prototype.then
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/species
    static get [Symbol.species]() { return Promise; }
}
exports.ManualPromise = ManualPromise;
//# sourceMappingURL=manual-promise.js.map