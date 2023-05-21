const esbuild = require("esbuild");

esbuild
	.build({
		entryPoints: {
			a: "src/a.js",
			b: "src/b.js",
			c: "src/c.ts",
			d: "src/d.ts",
			e: "src/e.tsx",
			common: "src/common.ts",
			index: "src/index.ts",
		},
		outdir: "dist/esbuild",
		bundle: true,
		tsconfig: "tsconfig.json",
		logLevel: "info",
	})
	.catch(() => process.exit(1));
