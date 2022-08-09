export declare class ManualPromise<T> implements PromiseLike<T> {
    private native;
    resolve: (value: T | PromiseLike<T>) => void;
    reject: (reason?: any) => void;
    constructor();
    then<TResult1 = T, TResult2 = never>(onFulfilled: ((value: T) => TResult1 | PromiseLike<TResult1>) | null | undefined, onRejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null | undefined): PromiseLike<TResult1 | TResult2>;
    catch<TResult2>(onRejected: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null | undefined): PromiseLike<T | TResult2>;
    finally(onFinally: () => void): PromiseLike<T>;
}
