// pages/_document.js
import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>{/* Add external stylesheet link here */}</Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
