import { ManualPromise } from './manual-promise';


export class PublicManualPromise<T> extends ManualPromise<T> {
	public resolve!: (value: T) => void;
	public reject!: (err: Error) => void;
}
