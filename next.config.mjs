/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */

const isDev = process.argv.indexOf('dev') !== -1
const isBuild = process.argv.indexOf('build') !== -1
if (!process.env.VELITE_STARTED && (isDev || isBuild)) {
  process.env.VELITE_STARTED = '1'
  const { build } = await import('velite')
  await build({ watch: isDev, clean: !isDev })
}

/** @type {import("next").NextConfig} */
const config = {
};

export default config;
