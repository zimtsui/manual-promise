export abstract class ManualPromise<T> extends Promise<T> {
	// https://stackoverflow.com/questions/48158730/extend-javascript-promise-and-resolve-or-reject-it-inside-constructor/48159603
	// https://tc39.es/ecma262/#sec-promise.prototype.then
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/species
	public static get [Symbol.species]() { return Promise; }

	protected resolve: (value: T) => void;
	protected reject: (err: Error) => void;

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
