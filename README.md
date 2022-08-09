# manual-promise

[![Npm package version](https://flat.badgen.net/npm/v/@zimtsui/manual-promise)](https://www.npmjs.com/package/@zimtsui/manual-promise)

Promise which can be resolved manually.

## Usage

```ts
import { ManualPromise } from '@zimtsui/manual-promise';

const p = new ManualPromise<void>();
p.resolve();
p.reject();
```
