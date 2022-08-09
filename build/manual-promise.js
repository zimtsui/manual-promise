"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManualPromise = void 0;
class ManualPromise {
    constructor() {
        this.native = new Promise((resolve, reject) => {
            this.resolve = resolve;
            this.reject = reject;
        });
        this.native.then(x => x, () => { });
    }
    then(onFulfilled, onRejected) {
        return this.native.then(onFulfilled, onRejected);
    }
    catch(onRejected) {
        return this.native.then(x => x, onRejected);
    }
    finally(onFinally) {
        return this.then(onFinally, onFinally)
            .then(() => this);
    }
}
exports.ManualPromise = ManualPromise;
//# sourceMappingURL=manual-promise.js.map