import commonjs from "@rollup/plugin-commonjs"
import del from "rollup-plugin-delete"
import dts from "rollup-plugin-dts"
import resolve from "@rollup/plugin-node-resolve"
import { terser } from "rollup-plugin-terser"
import typescript from "@rollup/plugin-typescript"

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: "dist/cjs/index.js",
        format: "cjs",
        sourcemap: true,
      },
      {
        file: "dist/esm/index.js",
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      del({ targets: "dist" }),
      commonjs(),
      resolve(),
      terser(),
      typescript({ tsconfig: "./tsconfig.json" }),
    ],
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
  },
]
