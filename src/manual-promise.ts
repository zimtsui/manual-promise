export class ManualPromise<T> implements PromiseLike<T> {
	private native: Promise<T>;
	public resolve!: (value: T | PromiseLike<T>) => void;
	public reject!: (reason?: any) => void;

	public constructor() {
		this.native = new Promise((resolve, reject) => {
			this.resolve = resolve;
			this.reject = reject;
		});
		this.native.then(x => x, () => { });
	}

	public then<TResult1 = T, TResult2 = never>(
		onFulfilled: ((value: T) => TResult1 | PromiseLike<TResult1>) | null | undefined,
		onRejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null | undefined,
	): Promise<TResult1 | TResult2> {
		return this.native.then(onFulfilled, onRejected);
	}

	public catch<TResult2>(
		onRejected: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null | undefined,
	): Promise<T | TResult2> {
		return this.native.then(x => x, onRejected);
	}

	public finally(onFinally: () => void): Promise<T> {
		return this.then(onFinally, onFinally)
			.then(() => this);
	}
}
