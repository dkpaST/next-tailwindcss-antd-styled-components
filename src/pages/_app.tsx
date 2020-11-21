import type { AppProps } from "next/app";

import "~/styles/css/tailwind.css";
import ThemeProvider from "~/context/theme/ThemeContainer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
