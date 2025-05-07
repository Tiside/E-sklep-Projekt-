/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import "./src/env.js";

// next blokuje strony wiec trzeba to zmienic tutaj
/** @type {import("next").NextConfig} */
const config = {
    images: {
      domains: ['drop-up.pl', 'aplug.pl'],
    },
  };
  
  export default config;