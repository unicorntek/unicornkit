import vue from "@vitejs/plugin-vue"
import { defineConfig } from "vite"
import * as path from "path"
import typescript2 from "rollup-plugin-typescript2"
import dts from "vite-plugin-dts"

export default defineConfig({
  build: {
    outDir: "dist",
    emptyOutDir: true,
    cssCodeSplit: true,
    lib: {
      entry: "src/components/main.ts",
      name: "build",
      formats: ["es", "cjs", "umd"],
      fileName: (format) => `build.${format}.js`,
    },
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "src/components/main.ts"),
      },
      external: ["vue"],
      output: {
        exports: "named",
        globals: {
          vue: "Vue",
        },
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  plugins: [
    vue(),
    dts({
      insertTypesEntry: true,
    }),
    typescript2({
      check: false,
      include: ["src/components/**/*.vue"],
      tsconfigOverride: {
        compilerOptions: {
          outDir: "dist",
          sourceMap: true,
          declaration: true,
          declarationMap: true,
        },
      },
      exclude: ["vite.config.ts"],
    }),
  ],
})
