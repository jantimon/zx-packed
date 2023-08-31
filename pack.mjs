/// @ts-check
import "zx";
import { readFileSync, writeFileSync } from "fs";

await $`rm -rf dist`;
await $`ncc build --target es2020 -e "./globals.js" --minify src/index.mjs`;
await $`cp node_modules/zx/build/*.d.ts dist/`;
await $`cp src/globals.mjs dist/`;
await $`cp src/cli.mjs dist/`;

const indexFiles = await glob(["dist/index.mjs", "dist/*.index.mjs"]);
indexFiles.forEach(async (file) => {
  // replace string import:
  // https://github.com/google/zx/blob/956dcc3bbdd349ac4c41f8db51add4efa2f58456/src/cli.ts#L58-L59
  // await __webpack_require__(9879)(globals);
  // -> await import('./globals.mjs');
  writeFileSync(
    file,
    readFileSync(file, "utf8").replace(
      /__webpack_require__\(\d+\)\(globals\)/g,
      "import('./globals.mjs')"
    )
  );
});
