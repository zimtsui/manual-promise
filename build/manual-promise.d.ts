export declare abstract class ManualPromise<T = void> extends Promise<T> {
    static get [Symbol.species](): PromiseConstructor;
    protected resolve: (value: T) => void;
    protected reject: (err: Error) => void;
    constructor();
}
