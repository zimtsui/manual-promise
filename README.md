# manual-promise

[![Npm package version](https://badgen.net/npm/v/@zimtsui/manual-promise)](https://www.npmjs.com/package/@zimtsui/manual-promise)

## Usage

```ts
import { ManualPromise } from '@zimtsui/manual-promise';

class MyPromise<T> extends ManualPromise<T> {
	public resolve!: (value: T) => void;
	public reject!: (err: Error) => void;
}
```
