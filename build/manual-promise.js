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
    static get [Symbol.species]() { return Promise; }
}
exports.ManualPromise = ManualPromise;
//# sourceMappingURL=manual-promise.js.map