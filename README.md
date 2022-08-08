# manual-promise

[![Npm package version](https://badgen.net/npm/v/@zimtsui/manual-promise)](https://www.npmjs.com/package/@zimtsui/manual-promise)

Promise which can be resolved manually.

## Usage

```ts
import { PublicManualPromise } from '@zimtsui/manual-promise';

const p = new PublicManualPromise<void>();
p.resolve();
p.reject();
```
