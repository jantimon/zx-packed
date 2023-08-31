# ZX (packed)

A lightweight version of [🐚 google/zx](https://github.com/google/zx).
It is 20x smaller (node_modules 13 MB -> 500kb) with 0 Dependencies.

> npm package size:  124.1 kB                                
> npm unpacked size: 466.7 kB 

```bash
npm i -g zx-packed
```

```js
#!/usr/bin/env zx

await $`cat package.json | grep name`

let branch = await $`git branch --show-current`
await $`dep deploy --branch=${branch}`

await Promise.all([
  $`sleep 1; echo 1`,
  $`sleep 2; echo 2`,
  $`sleep 3; echo 3`,
])

let name = 'foo bar'
await $`mkdir /tmp/${name}`
```

## API  

For usage please use [🐚 google/zx](https://github.com/google/zx#goods)

## Typescript 

For typescript development you have to install `@types/node`:
`npm i --save-dev @types/node`

## License

### zx

Copyright 2023 Anton Medvedev

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.