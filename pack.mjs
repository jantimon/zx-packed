/// @ts-check
import "zx";
import { readFileSync, writeFileSync } from "fs";

await $`rm -rf dist`;
await $`esbuild src/index.mjs --bundle --platform=node --target=node18 --format=cjs --outfile=dist/index.cjs`;

await $`cp node_modules/zx/build/*.d.ts dist/`;
await $`cp src/globals.js dist/`;
await $`cp src/cli.mjs dist/`;

const cjsAssets = await glob(["dist/*.cjs"]);
for (const file of cjsAssets) {
  console.log("Patch file:", file);

  // esbuild does not support import.meta.url
  // @see https://github.com/evanw/esbuild/issues/1492
  writeFileSync(
    file,
    readFileSync(file, "utf8")
      .replace(/import_meta\.url/g, '__filename')
  );

  await $`esbuild --minify ${file} --outfile=${file} --allow-overwrite`
}