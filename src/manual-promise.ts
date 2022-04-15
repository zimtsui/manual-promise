export class ManualPromise<T = void> extends Promise<T> {
	public static get [Symbol.species]() { return Promise; }

	public readonly resolve: (value: T) => void;
	public readonly reject: (err: Error) => void;

	constructor() {
		let tmpResolve: (value: T) => void;
		let tmpReject: () => void;

		super((resolve, reject) => {
			tmpResolve = resolve;
			tmpReject = reject;
		});

		this.resolve = tmpResolve!;
		this.reject = tmpReject!;
	}
}
