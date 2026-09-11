import type { NextConfig } from "next";
import { defaultLocale } from "./src/lib/i18n";

const nextConfig: NextConfig = {
  /**
   * Every page lives under a locale segment, so the bare root needs to go
   * somewhere. A config redirect is enough here — no proxy needed.
   */
  async redirects() {
    return [
      {
        source: "/",
        destination: `/${defaultLocale}`,
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
