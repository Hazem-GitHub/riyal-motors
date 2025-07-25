import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextIntlConfig = createNextIntlPlugin(
  "./src/i18n.ts"
  // {
  //   messagesDir: "./src/i18n/messages",
  //   // Optional: Specify the default locale
  //   defaultLocale: "en",
  //   // Optional: Specify the supported locales
  //   locales: ["en", "ar"],
  // }
);
const nextConfig: NextConfig = {
  /* config options here */
};

export default nextIntlConfig(nextConfig);
