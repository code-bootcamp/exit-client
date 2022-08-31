import { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";
import "antd/dist/antd.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Global styles={globalStyles} />
      <Component {...pageProps} />
    </RecoilRoot>
  );
}

export default MyApp;
