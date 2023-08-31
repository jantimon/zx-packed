import "zx"

await $`rm -rf dist`
await $`ncc build --target es2020 --minify src/index.mjs`
await $`cp node_modules/zx/build/*.d.ts dist/`
await $`cp src/globals.mjs dist/`
await $`cp src/cli.mjs dist/`