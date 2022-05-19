import { defineConfig } from "tsup";

export default defineConfig((options) => ({
  entry: ["index.ts"],
  dts: true,
  format: ["esm", "cjs"],
}));
