export class ManualPromise extends Promise<void> {
	public static get [Symbol.species]() { return Promise; }

	public readonly resolve!: () => void;
	public readonly reject!: (err: Error) => void;

	constructor() {
		let tmpResolve: () => void;
		let tmpReject: () => void;

		super((resolve, reject) => {
			tmpResolve = resolve;
			tmpReject = reject;
		});

		this.resolve = tmpResolve!;
		this.reject = tmpReject!;
	}
}
