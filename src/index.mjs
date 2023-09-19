import * as zx from "zx";

exports.runZX = async () => {
  Object.assign(global, zx);
  await import("zx/cli");
};

// The following exports are required as esbuild can compile node packages only to CJS
// Without the following exports, the bundle would only export a default export
// and users would have to write the following:
//
// import zx from "zx-packed";
// zx.$`echo "Hello World"`;

exports.$ = zx.$;
exports.ProcessOutput = zx.ProcessOutput;
exports.ProcessPromise = zx.ProcessPromise;
exports.YAML = zx.YAML;
exports.argv = zx.argv;
exports.cd = zx.cd;
exports.chalk = zx.chalk;
exports.defaults = zx.defaults;
exports.echo = zx.echo;
exports.expBackoff = zx.expBackoff;
exports.fetch = zx.fetch;
exports.fs = zx.fs;
exports.glob = zx.glob;
exports.globby = zx.globby;
exports.log = zx.log;
exports.nothrow = zx.nothrow;
exports.os = zx.os;
exports.path = zx.path;
exports.question = zx.question;
exports.quiet = zx.quiet;
exports.quote = zx.quote;
exports.quotePowerShell = zx.quotePowerShell;
exports.retry = zx.retry;
exports.sleep = zx.sleep;
exports.spinner = zx.spinner;
exports.ssh = zx.ssh;
exports.stdin = zx.stdin;
exports.updateArgv = zx.updateArgv;
exports.which = zx.which;
exports.within = zx.within;
