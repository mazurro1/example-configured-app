import withBundleAnalyzer from "@next/bundle-analyzer";
import nextBuildId from "next-build-id";
import withPlugins from "next-compose-plugins";
import withImages from "next-images";
import nextPWA from "next-pwa";
import { dirname } from "path";
import { fileURLToPath } from "url";

import { env } from "./src/env.mjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const withPWA = nextPWA({
  dest: "public",
  mode: "production",
  disable: env.NEXT_PUBLIC_APP_ENV === "prd" ? false : true,
  disableDevLogs: true,
});

/**
 * @type {import('next').NextConfig}
 */

const config = withPlugins(
  [[withBundleAnalyzer({ enabled: false })]],
  withPWA(
    withImages({
      compiler: {
        styledComponents: true,
      },
      staticPageGenerationTimeout: 120,
      compress: true,
      trailingSlash: false,
      reactStrictMode: true,
      experimental: { instrumentationHook: true },
      output: "export",
      generateBuildId: async () => {
        const fromGit = await nextBuildId({ dir: __dirname });
        return fromGit;
      },
    }),
  ),
);

export default config;
