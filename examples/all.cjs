// Run all files in this directory:
(async () => {
    const zx = (await import("zx-packed"));
    const { $, glob, cd } = zx;
    const files = await glob(`*.mjs`, { cwd: __dirname });
    cd(__dirname);
    for (const file of files) {
        await $`node ./${file}`;

        console.log("\n\n");
    }
})()
