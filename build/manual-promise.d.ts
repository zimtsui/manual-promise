export declare class ManualPromise<T = void> extends Promise<T> {
    static get [Symbol.species](): PromiseConstructor;
    readonly resolve: (value: T) => void;
    readonly reject: (err: Error) => void;
    constructor();
}
