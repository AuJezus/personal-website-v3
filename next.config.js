/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */

await import("./src/env.js");
import { build } from "velite";

class VeliteWebpackPlugin {
  static started = false;
  apply(/** @type {import('webpack').Compiler} */ compiler) {
    // executed three times in nextjs
    // twice for the server (nodejs / edge runtime) and once for the client
    compiler.hooks.beforeCompile.tapPromise("VeliteWebpackPlugin", async () => {
      if (VeliteWebpackPlugin.started) return;
      VeliteWebpackPlugin.started = true;
      const dev = compiler.options.mode === "development";
      await build({ watch: dev, clean: !dev });
    });
  }
}

/** @type {import("next").NextConfig} */
const config = {
  webpack: (config) => {
    // This code with eslint errors is from the docs, so it's okay.
    // eslint-disable-next-line
    config.plugins.push(new VeliteWebpackPlugin());
    // eslint-disable-next-line
    return config;
  },
};

export default config;
