export declare abstract class ManualPromise<T> extends Promise<T> {
    static get [Symbol.species](): PromiseConstructor;
    protected resolve: (value: T) => void;
    protected reject: (err: Error) => void;
    constructor();
}
