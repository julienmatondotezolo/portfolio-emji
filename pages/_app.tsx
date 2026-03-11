import "../src/assets/styles/globals.css";

import type { AppProps } from "next/app";

import { LanguageProvider } from "../src/i18n";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LanguageProvider>
      <Component {...pageProps} />
    </LanguageProvider>
  );
}

export default MyApp;
