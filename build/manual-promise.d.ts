export declare class ManualPromise extends Promise<void> {
    static get [Symbol.species](): PromiseConstructor;
    readonly resolve: () => void;
    readonly reject: (err: Error) => void;
    constructor();
}
