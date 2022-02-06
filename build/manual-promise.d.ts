export declare class ManualPromise extends Promise<void> {
    static get [Symbol.species](): PromiseConstructor;
    resolve: () => void;
    reject: (err: Error) => void;
    constructor();
}
