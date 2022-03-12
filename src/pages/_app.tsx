import type { AppProps } from "next/app";
import React, { FC } from "react";
import Layout from "../components/Layout/Layout";
import { wrapper } from "../redux/store/store";

import "../styles/globals.css";

const WrappedApp: FC<AppProps> = ({ Component, pageProps }) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
);

export default wrapper.withRedux(WrappedApp);
