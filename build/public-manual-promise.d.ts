import { ManualPromise } from './manual-promise';
export declare class PublicManualPromise<T> extends ManualPromise<T> {
    resolve: (value: T) => void;
    reject: (err: Error) => void;
}
